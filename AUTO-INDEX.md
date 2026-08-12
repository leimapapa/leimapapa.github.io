# Automatic project index

The homepage keeps the existing `/RepoName` URL structure. You do not need to edit the homepage when adding a new project.

## How it works

The scheduled GitHub Action looks through public repositories owned by `leimapapa`, finds repositories with GitHub Pages enabled, and rebuilds `projects.json`. Repositories using normal GitHub Pages project URLs are rendered as `/RepoName` on `leimolabs.com`. If a repository has its own custom Pages domain, the real Pages URL is retained so the link cannot silently point to a dead path.

The homepage also keeps the current 17 projects in `projects-manual.json`. The generated index merges those entries with automatically discovered repositories and removes duplicates.

## Optional repository topics

Add `category:SVG`, `category:Games`, etc. to a repository's GitHub Topics to choose its displayed category. Use `leimo:hidden` to keep a Pages repo out of the homepage index.

## Adding a project

1. Create the repository.
2. Enable GitHub Pages using the repo's existing Pages configuration.
3. The next scheduled workflow run will discover it automatically. You can also run **Actions → Update project index → Run workflow** to update immediately.

No wildcard DNS record is needed for the `/RepoName` structure.
