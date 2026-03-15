import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, Linkedin, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-info">
          <Link to="/" className="logo footer-logo">
            <Globe size={22} className="logo-globe" />
            <div className="logo-text-wrap">
              <span className="logo-main">GRATIA AETERNA</span>
              <span className="logo-sub">TRADING CO</span>
            </div>
          </Link>
          <p className="footer-description">
            Leading international supplier of premium industrial minerals and rare-earth elements.
            Committed to reliable sourcing, bulk export logistics, and long-term industrial
            partnerships globally.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products Catalog</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/industries">Industries Served</Link></li>
            <li><Link to="/global-supply">Global Supply</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-products">
          <h3>Mineral Supply</h3>
          <div className="footer-product-groups">
            <div className="footer-product-group">
              <h4 style={{ color: 'var(--accent)', fontSize: '0.65rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>INDUSTRIAL MINERALS</h4>
              <ul>
                <li><Link to="/quartz-supplier">Quartz Supplier</Link></li>
                <li><Link to="/potash-feldspar-supplier">Potash Feldspar</Link></li>
                <li><Link to="/soda-feldspar-supplier">Soda Feldspar</Link></li>
                <li><Link to="/fluorite-supplier">Fluorite Supply</Link></li>
                <li><Link to="/mica-supplier">Mica (Crude & Cut)</Link></li>
              </ul>
            </div>
            <div className="footer-product-group" style={{ marginTop: '1.25rem' }}>
              <h4 style={{ color: 'var(--accent)', fontSize: '0.65rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>STRATEGIC METAL ORES</h4>
              <ul>
                <li><Link to="/copper-ore-supplier">Copper Ore</Link></li>
                <li><Link to="/nickel-ore-supplier">Nickel Ore</Link></li>
                <li><Link to="/tungsten-supplier">Tungsten Supply</Link></li>
                <li><Link to="/tantalum-supplier">Tantalum Ore</Link></li>
                <li><Link to="/niobium-supplier">Niobium</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact Detail</h3>
          <ul className="contact-list">
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>
                <strong>Head Office:</strong><br />
                NO: 13, Stalin Nagar<br />
                Athipatu Railway Station Road,<br />
                Chennai 601203, Tamil Nadu
              </span>
            </li>
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>
                <strong>Branch Office:</strong><br />
                NO: 3, Raj Nagar<br />
                Near Gau Matha Square,<br />
                Rajsamand 313324, Rajasthan
              </span>
            </li>
            <li>
              <MessageCircle size={16} className="contact-icon" />
              <span>WhatsApp: +91 82332 51241</span>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <span>info@gratiaaeterna.com</span>
            </li>
            <li>
              <Globe size={16} className="contact-icon" />
              <span>www.gratiaaeterna.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Gratia Aeterna Trading Co. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
