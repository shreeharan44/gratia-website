import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Gratia Aeterna Trading Co. | Industrial Mineral Supplier';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'Gratia Aeterna Trading Co. is engaged in the mining, trading, and global supply of industrial metallic and non-metallic minerals. Learn about our company, mission, and export capabilities.';
  }, []);

  const focusPoints = [
    'High-quality mineral sourcing from established mines',
    'Reliable international supply chains worldwide',
    'Competitive pricing through direct procurement',
    'Long-term industrial partnerships with buyers',
  ];

  const exportCaps = [
    'Port-to-port global logistics',
    'Specialized industrial packaging',
    'Comprehensive export documentation',
    'Multi-modal transport options',
    'Direct procurement from mining operations',
    'Bulk shipment handling capability',
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="container">
          <span className="subtitle">Our Company</span>
          <h1>About Gratia Aeterna Trading Co.</h1>
          <p>Your trusted partner in global mineral trading — from mines to markets worldwide.</p>
        </div>
      </section>

      {/* Company Description */}
      <section className="section-padding">
        <div className="container about-desc-grid">
          <div className="about-desc-text">
            <span className="subtitle">Who We Are</span>
            <h2>Global Supplier of Industrial Minerals & Strategic Metal Ores</h2>
            <div className="section-divider"></div>
            <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
              Gratia Aeterna Trading Co. is engaged in the mining, trading, and global supply of
              industrial metallic and non-metallic minerals.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              With strong mining partnerships and sourcing networks, we provide reliable mineral
              resources to manufacturers and industrial buyers worldwide. Our company bridges the gap
              between mineral-producing regions and global industrial demand.
            </p>
            <div className="about-focus-list">
              {focusPoints.map((point, i) => (
                <div key={i} className="about-focus-item">
                  <CheckCircle size={18} className="about-check" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image-col">
            <div className="about-img-wrapper">
              <img
                src="/assets/images/image2.png"
                alt="Mining operations — Gratia Aeterna"
                loading="lazy"
              />
              <div className="about-img-badge">
                <span className="badge-title">Established</span>
                <span className="badge-detail">Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="about-caps-section">
        <div className="container">
          <div className="about-caps-inner">
            <div className="about-caps-header">
              <span className="subtitle">Export Capabilities</span>
              <h2>Our International Trade Infrastructure</h2>
              <div className="section-divider"></div>
              <p style={{ marginTop: '1.5rem' }}>
                We have established robust export infrastructure to serve industrial buyers across
                multiple continents. Our logistics expertise ensures timely delivery and full compliance
                with international trade requirements.
              </p>
              <Link to="/global-supply" className="btn btn-accent" style={{ marginTop: '2rem' }}>
                Learn About Global Supply <ArrowRight size={16} />
              </Link>
            </div>
            <div className="about-caps-grid">
              {exportCaps.map((cap, i) => (
                <div key={i} className="about-cap-card">
                  <CheckCircle size={20} className="cap-check" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Partner With Us?</h2>
          <p style={{ maxWidth: '500px', margin: '1rem auto 2.5rem' }}>
            Contact our team to discuss your mineral supply requirements and establish a long-term trading partnership.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
