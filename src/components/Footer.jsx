import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <Link to="/" className="logo footer-logo">
                        <span className="logo-text">GRATIA AETERNA</span>
                        <span className="logo-subtext">TRADING CO</span>
                    </Link>
                    <p className="footer-description">
                        Leading international supplier of premium industrial minerals and rare-earth elements. Committed to quality, reliability, and technical excellence in global manufacturing supply chains.
                    </p>

                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/industries">Industries</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-products">
                    <h3>Key Products</h3>
                    <div className="footer-product-groups">
                        <div className="footer-product-group">
                            <h4 style={{ color: 'var(--accent)', fontSize: '0.75rem', marginBottom: '0.75rem' }}>RARE EARTH</h4>
                            <ul>
                                <li><Link to="/products/copper">Copper</Link></li>
                                <li><Link to="/products/nickel">Nickel</Link></li>
                                <li><Link to="/products/tungsten">Tungsten</Link></li>
                                <li><Link to="/products/niobium">Tantalum & Niobium</Link></li>
                            </ul>
                        </div>
                        <div className="footer-product-group" style={{ marginTop: '1.5rem' }}>
                            <h4 style={{ color: 'var(--accent)', fontSize: '0.75rem', marginBottom: '0.75rem' }}>INDUSTRIAL</h4>
                            <ul>
                                <li><Link to="/products/quartz">Quartz</Link></li>
                                <li><Link to="/products/feldspar-soda">Feldspar</Link></li>
                                <li><Link to="/products/fluorite">Fluorite</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Contact Details</h3>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} className="contact-icon" />
                            <span>  NO: 13 ,Stalin Nagar<br />Athipatu Railway Station Road, Chennai 601203, Tamil Nadu</span>
                        </li>

                        <li>
                            <Mail size={18} className="contact-icon" />
                            <span>gratiaaeterna@gmail.com</span>
                        </li>
                        <li>
                            <Globe size={18} className="contact-icon" />
                            <span>www.gratiaaeterna.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} Gratia Minerals. All Rights Reserved.</p>
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
