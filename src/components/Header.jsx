import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import tfiLogo from '../assets/TFI.png';
import { CONTACT_EMAIL } from '../data/programs';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Programs', to: '/programs' },
  { label: 'About', to: '/about' },
  { label: 'Get Involved', to: '/get-involved' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg = scrolled ? 'rgba(10,22,40,0.97)' : '#0a1628';

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: navBg,
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.3)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 68,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <img src={tfiLogo} alt="The Financial Initiative Logo" style={{ height: 50 }} />
          </div>
          <div>
            <div
              style={{
                color: '#fff',
                fontWeight: 800,
                fontSize: 15,
                lineHeight: 1.1,
              }}
            >
              The Financial
            </div>
            <div
              style={{
                color: '#17a2d8',
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Initiative
            </div>
          </div>
        </Link>

        <div
          className="desktop-nav"
          style={{ display: 'flex', gap: 4, alignItems: 'center' }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: active ? '#17a2d8' : 'rgba(255,255,255,0.85)',
                  fontWeight: active ? 700 : 500,
                  fontSize: 14,
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: 8,
                  background: active ? 'rgba(23,162,216,0.12)' : 'transparent',
                  transition: 'all 0.2s',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              background: '#17a2d8',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              marginLeft: 8,
            }}
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            padding: 8,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: '#0a1628',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 24px 24px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 500,
                fontSize: 15,
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              display: 'block',
              marginTop: 16,
              background: '#17a2d8',
              color: '#fff',
              padding: 12,
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
