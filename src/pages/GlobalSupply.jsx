import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Ship, Mountain, Users, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import './GlobalSupply.css';

const stats = [
  { value: '50+', label: 'Countries Served' },
  { value: '10+', label: 'Mineral Products' },
  { value: 'Bulk', label: 'Shipment Capability' },
  { value: 'Direct', label: 'Mine Partnerships' },
];

const capabilities = [
  {
    icon: <Mountain size={28} />,
    title: 'Mining Partnerships',
    desc: 'Long-term partnerships with established mining operations in India and globally, ensuring consistent supply of high-quality minerals and ores.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Sourcing Network',
    desc: 'Extensive sourcing network spanning key mineral-producing regions, allowing us to supply diverse industrial minerals with competitive pricing.',
  },
  {
    icon: <Ship size={28} />,
    title: 'Export Logistics',
    desc: 'Complete export management including documentation, customs clearance, freight forwarding, and port-to-port delivery for international buyers.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Bulk Shipment Capability',
    desc: 'Capability to handle bulk shipments from small containerized loads to large bulk vessel consignments for high-volume industrial buyers.',
  },
  {
    icon: <Users size={28} />,
    title: 'Industrial Buyer Partnerships',
    desc: 'Dedicated account management for industrial buyers with long-term supply agreements, priority allocation, and stable pricing structures.',
  },
];

const strengths = [
  'Direct sourcing from mines — no middlemen',
  'Reliable bulk supply capability for major manufacturers',
  'International trading expertise across multiple regions',
  'Competitive pricing through direct procurement',
  'Long-term supply partnerships with flexible terms',
  'Complete export documentation and logistics support',
];

const GlobalSupply = () => {
  useEffect(() => {
    document.title = 'Global Mineral Supply | International Trading | Gratia Aeterna Trading Co.';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'Gratia Aeterna Trading Co. provides global mineral supply through mining partnerships, international sourcing networks, export logistics, and bulk shipment capability worldwide.';
  }, []);

  return (
    <div className="global-supply-page">
      {/* Hero */}
      <section className="page-hero global-supply-hero">
        <div className="container">
          <span className="subtitle">International Trade</span>
          <h1>Global Mineral Supply</h1>
          <p>
            Gratia Aeterna Trading Co. specializes in sourcing and supplying industrial minerals
            and strategic metal ores for global industrial markets. Through strong mining partnerships
            and international logistics networks, we ensure reliable supply of high-grade minerals
            to manufacturers worldwide.
          </p>
          <Link to="/contact" className="btn btn-accent" style={{ marginTop: '2rem' }}>
            Request a Bulk Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="global-stats-bar">
        <div className="container">
          <div className="global-stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="global-stat-item">
                <div className="global-stat-value">{stat.value}</div>
                <div className="global-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Trade Infrastructure</span>
            <h2>Our Global Supply Capabilities</h2>
            <div className="section-divider"></div>
          </div>
          <div className="global-caps-grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="global-cap-card">
                <div className="global-cap-icon">{cap.icon}</div>
                <div className="global-cap-text">
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="global-strengths-section">
        <div className="container">
          <div className="global-strengths-inner">
            <div className="global-strengths-text">
              <span className="subtitle">Our Strengths</span>
              <h2>Why International Buyers Trust Us</h2>
              <div className="section-divider"></div>
              <p style={{ marginTop: '1.5rem' }}>
                Our combination of direct mine sourcing, established logistics partnerships,
                and deep industry knowledge makes us a preferred partner for industrial
                manufacturers seeking reliable mineral supply.
              </p>
              <Link to="/contact" className="btn btn-accent" style={{ marginTop: '2rem' }}>
                Start a Partnership <ArrowRight size={16} />
              </Link>
            </div>
            <div className="global-strengths-list">
              {strengths.map((s, i) => (
                <div key={i} className="global-strength-item">
                  <CheckCircle size={20} className="strength-check" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="section-padding" style={{ textAlign: 'center', background: 'var(--bg-light)' }}>
        <div className="container">
          <span className="subtitle">Our Inventory</span>
          <h2>Industrial Minerals & Strategic Metal Ores Available Worldwide</h2>
          <p style={{ maxWidth: '580px', margin: '1rem auto 2.5rem' }}>
            Browse our complete portfolio of industrial minerals and strategic metal ores,
            each available for bulk export to manufacturers globally.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary">
              View All Products <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Bulk Supply Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalSupply;
