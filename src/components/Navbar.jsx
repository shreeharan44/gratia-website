import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Global Supply', path: '/global-supply' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Globe size={22} className="logo-globe" />
          <div className="logo-text-wrap">
            <span className="logo-main">GRATIA AETERNA</span>
            <span className="logo-sub">TRADING CO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-accent quote-btn">
            Request Quote <ChevronRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle mobile-only" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''} mobile-only`}>
        <div className="mobile-nav-header">
          <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
            <Globe size={22} className="logo-globe" />
            <div className="logo-text-wrap">
              <span className="logo-main">GRATIA AETERNA</span>
              <span className="logo-sub">TRADING CO</span>
            </div>
          </Link>
          <button className="mobile-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-accent mobile-quote-btn" onClick={() => setIsOpen(false)}>
          Request Quote
        </Link>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
