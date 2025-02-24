// Export a function to create and insert the navbar
export function createNavbar(customStyles = {}) {
  // navbar container
  const navbar = document.createElement('div');
  navbar.id = 'minimal-navbar';
  
  // Default styling for the navbar
  const defaultStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    zIndex: '1000',
    background: 'transparent'
  };
	// Merge default styles with any custom styles provided
  Object.assign(navbar.style, defaultStyles, customStyles);
  
  const logoLink = document.createElement('a');
  logoLink.href = 'https://leimolabs.com';
  logoLink.style.display = 'flex';
  logoLink.style.alignItems = 'center';
	logoLink.title = 'LeimoLabs homepage';
  logoLink.innerHTML = `
    <svg viewBox="0 0 10 10" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
	<path fill="#042663" d="M5 0a5 5 0 10.001 0m0 3a2 2 0 11-.001 0m-1 1.5h2v1h-2z" />
	<path fill="#76FF03" d="M2 0h6l-2.7 4.5-.6 0zm3 1a1 1 90 10.001 0m.299 4.5 2.7 4.5h-6l2.7-4.5zm-.3 1.5a1 1 90 10.001 0" />
	</svg>
  `;
  navbar.appendChild(logoLink);
  document.body.appendChild(navbar);
}
