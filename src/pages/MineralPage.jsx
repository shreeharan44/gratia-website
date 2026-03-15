import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './MineralPage.css';

const useSEO = (title, description) => {
  useEffect(() => {
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
    return () => {
      document.title = 'Gratia Aeterna Trading Co. | Industrial Minerals & Strategic Metal Ores Supplier';
    };
  }, [title, description]);
};

const MineralPage = ({ data }) => {
  useSEO(data.pageTitle, data.metaDescription);

  // Map product detail IDs to image fallbacks
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(9, 21, 37, 0.78), rgba(9, 21, 37, 0.78)), url('/assets/images/image4.png')`,
  };

  return (
    <div className="mineral-page">
      {/* Hero Banner */}
      <section className="mineral-hero" style={heroStyle}>
        <div className="container">
          <div className="mineral-hero-content">
            <div className="mineral-hero-breadcrumb">
              <Link to="/products">Products</Link>
              <ArrowRight size={12} />
              <span>{data.h1}</span>
            </div>
            <h1>{data.h1}</h1>
            <p className="mineral-hero-tagline">{data.tagline}</p>
            <div className="mineral-hero-badges">
              {data.trustBadges.map((badge, i) => (
                <span key={i} className="hero-badge">
                  <CheckCircle size={14} /> {badge}
                </span>
              ))}
            </div>
            <Link to="/contact" className="btn btn-accent mineral-hero-cta">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="mineral-description section-padding">
        <div className="container mineral-desc-grid">
          <div className="mineral-desc-text">
            <span className="subtitle">Product Overview</span>
            <h2>{data.h1} — Industrial Supply</h2>
            <div className="mineral-desc-divider"></div>
            {data.description.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mineral-desc-image">
            <img
              src={data.image || "/assets/images/image3.png"}
              alt={data.h1}
              className="overview-img"
            />
            <div className="mineral-image-tag">
              <span>Direct Mine Sourcing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mineral-applications bg-mineral-alt">
        <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="section-header centered">
            <span className="subtitle">Industrial Usage</span>
            <h2>Applications of {data.h1.split(' ')[0]} {data.h1.split(' ')[1]}</h2>
            <div className="section-divider centered"></div>
          </div>
          <div className="mineral-apps-grid">
            {data.applications.map((app, i) => (
              <div key={i} className="mineral-app-card">
                <div className="mineral-app-number">{String(i + 1).padStart(2, '0')}</div>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="mineral-industries section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Sectors We Supply To</span>
            <h2>Industries Using {data.h1.split(' ')[0]} {data.h1.split(' ')[1]}</h2>
            <div className="section-divider"></div>
          </div>
          <div className="mineral-industries-grid">
            {data.industries.map((ind, i) => (
              <div key={i} className="mineral-industry-card">
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mineral-cta-section">
        <div className="container">
          <div className="mineral-cta-box">
            <div className="mineral-cta-content">
              <h2>Ready to Order {data.h1.split(' ')[0]} {data.h1.split(' ')[1]} in Bulk?</h2>
              <p>Contact our team for bulk supply inquiries, international export pricing, and long-term supply agreements.</p>
            </div>
            <div className="mineral-cta-actions">
              <Link to="/contact" className="btn btn-accent">
                Request Bulk Quote <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="btn btn-outline-light">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MineralPage;
