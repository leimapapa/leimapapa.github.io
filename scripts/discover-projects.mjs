#!/usr/bin/env node
/**
 * Build projects.json from GitHub Pages-enabled repositories owned by leimapapa.
 *
 * URL behavior:
 *   - Normal GitHub Pages project sites are rendered as /RepoName so the site's
 *     existing URL structure stays unchanged under leimolabs.com.
 *   - If a repository has its own custom Pages domain, that real Pages URL is
 *     retained so we never create a dead /RepoName link by assumption.
 *
 * Optional repository topics:
 *   category:<name>   -> displayed category
 *   leimo:hidden      -> exclude from the homepage
 */
import { writeFile, readFile } from 'node:fs/promises';

const OWNER = 'leimapapa';
const ROOT_REPO = `${OWNER}.github.io`;
const OUTPUT = new URL('../projects.json', import.meta.url);
const API = 'https://api.github.com';
const TOKEN = process.env.GITHUB_TOKEN || '';
const HEADERS = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'leimo-labs-project-index',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {})
};

async function getJson(path) {
  const response = await fetch(`${API}${path}`, { headers: HEADERS });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${path}`);
  return response.json();
}

function niceName(name) {
  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
}

function categoryFrom(topics = []) {
  const explicit = topics.find(t => t.toLowerCase().startsWith('category:'));
  if (explicit) return explicit.slice(9).replace(/[-_]+/g, ' ').toUpperCase();
  return 'PROJECTS';
}

function projectUrl(repoName, pages) {
  const html = String(pages?.html_url || '');
  try {
    const u = new URL(html);
    const githubIoHost = `${OWNER}.github.io`;
    if (u.hostname.toLowerCase() === githubIoHost) {
      return `/${repoName}`;
    }
    return html || `/${repoName}`;
  } catch {
    return `/${repoName}`;
  }
}

async function main() {
  const repos = [];
  for (let page = 1; ; page++) {
    const batch = await getJson(`/users/${OWNER}/repos?per_page=100&page=${page}&type=owner&sort=updated`);
    repos.push(...batch);
    if (batch.length < 100) break;
  }

  const projects = [];
  for (const repo of repos) {
    if (repo.name.toLowerCase() === ROOT_REPO.toLowerCase()) continue;
    if (repo.archived || repo.disabled || !repo.has_pages) continue;

    const topics = Array.isArray(repo.topics) ? repo.topics : [];
    if (topics.some(t => t.toLowerCase() === 'leimo:hidden')) continue;

    try {
      const pages = await getJson(`/repos/${OWNER}/${encodeURIComponent(repo.name)}/pages`);
      const url = projectUrl(repo.name, pages);
      projects.push({
        name: niceName(repo.name),
        description: repo.description || 'A Leimo Labs experiment.',
        url,
        cname: pages.cname || null,
        category: categoryFrom(topics),
        repo: repo.html_url,
        language: repo.language || 'WEB',
        pushedAt: repo.pushed_at,
        order: 999
      });
    } catch (error) {
      console.warn(`Skipping ${repo.name}: ${error.message}`);
    }
  }

  let manual = [];
  try {
    manual = JSON.parse(await readFile(new URL('../projects-manual.json', import.meta.url), 'utf8'));
  } catch {
    manual = [];
  }

  const combined = [...manual, ...projects];
  const seen = new Set();
  const deduped = combined.filter(project => {
    const key = String(project.url || project.repo || project.name).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  deduped.sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || String(a.category).localeCompare(String(b.category)) || String(a.name).localeCompare(String(b.name)));
  await writeFile(OUTPUT, JSON.stringify(deduped, null, 2) + '\n', 'utf8');
  console.log(`Wrote ${deduped.length} projects (${projects.length} discovered, ${manual.length} manual).`);
}

main().catch(error => { console.error(error); process.exit(1); });
