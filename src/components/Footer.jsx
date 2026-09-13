import Brand from './Brand';

const footerGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Technologies', href: '#technologies' },
      { label: 'Projects', href: '#projects', id: 'projects' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about', id: 'about' },
      { label: 'Contact', href: '#contact', id: 'contact' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand footer />
            <p>Curated tools, technologies, and resources for developers building modern software.</p>
            <nav className="social-links" aria-label="Social links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </nav>
          </div>

          <div className="footer-groups">
            {footerGroups.map((group) => (
              <nav key={group.title} className="footer-group" aria-label={`${group.title} links`}>
                <h2>{group.title}</h2>
                {group.links.map((link) => (
                  <a key={link.label} id={link.id} href={link.href}>{link.label}</a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <nav aria-label="Legal shortcuts">
            <a id="privacy" href="#privacy">Privacy</a>
            <a id="terms" href="#terms">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
