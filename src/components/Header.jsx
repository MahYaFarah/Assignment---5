import { useState } from 'react';
import Brand from './Brand';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="menu-toggle__icon">
            <span />
            <span />
            <span />
          </span>
        </button>

        <Brand />

        <nav
          id="primary-navigation"
          className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              className={index === 0 ? 'is-active' : ''}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="auth-actions">
          <a className="sign-in" href="#sign-in">Sign In</a>
          <a className="sign-up" href="#sign-up">Sign Up</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
