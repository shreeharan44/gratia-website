import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Industries.css';

const industries = [
  {
    icon: '🏭',
    title: 'Ceramics Industry',
    desc: 'Premium feldspar (potash & soda), quartz, and mica for ceramic bodies, glazes, tiles, and technical ceramics manufacturing.',
    minerals: ['Quartz', 'Potash Feldspar', 'Soda Feldspar', 'Mica'],
  },
  {
    icon: '🔬',
    title: 'Glass Manufacturing',
    desc: 'High-purity quartz and feldspar for flat glass, container glass, specialty glass, and glass fiber production.',
    minerals: ['Quartz', 'Potash Feldspar', 'Soda Feldspar', 'Fluorite'],
  },
  {
    icon: '⚙️',
    title: 'Metallurgy',
    desc: 'Fluorite as metallurgical flux for steel production and aluminum smelting. Copper, nickel, and tungsten ores for alloy manufacturing.',
    minerals: ['Fluorite', 'Copper Ore', 'Nickel Ore', 'Tungsten'],
  },
  {
    icon: '💡',
    title: 'Electronics Industry',
    desc: 'High-grade quartz for semiconductor fabrication, mica for electrical insulation, and tantalum for capacitor manufacturing.',
    minerals: ['Quartz', 'Mica', 'Tantalum', 'Copper Ore'],
  },
  {
    icon: '⚗️',
    title: 'Chemical Industry',
    desc: 'Fluorite for hydrofluoric acid production, quartz for chemical process vessels, and specialty mineral compounds for industrial chemistry.',
    minerals: ['Fluorite', 'Quartz', 'Soda Feldspar'],
  },
];

const Industries = () => {
  useEffect(() => {
    document.title = 'Industries We Serve | Gratia Aeterna Trading Co.';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'Gratia Aeterna Trading Co. supplies industrial minerals to ceramics, glass manufacturing, metallurgy, electronics, and chemical industries worldwide.';
  }, []);

  return (
    <div className="industries-page">
      {/* Hero */}
      <section className="page-hero industries-hero">
        <div className="container">
          <span className="subtitle">Sectors We Serve</span>
          <h1>Industries We Supply</h1>
          <p>
            Our industrial minerals and strategic metal ores are used across five major
            industrial sectors, powering manufacturing operations worldwide.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Industrial Applications</span>
            <h2>Key Industries We Serve</h2>
            <div className="section-divider"></div>
          </div>
          <div className="industries-grid-full">
            {industries.map((ind, i) => (
              <div key={i} className="industry-full-card">
                <div className="industry-icon-lg">{ind.icon}</div>
                <div className="industry-card-body">
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                  <div className="industry-minerals">
                    {ind.minerals.map((m, j) => (
                      <span key={j} className="industry-mineral-tag">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="industries-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Supply Your Industry with Premium Minerals</h2>
          <p style={{ maxWidth: '540px', margin: '1rem auto 2.5rem', color: 'rgba(255,255,255,0.75)' }}>
            Contact us to discuss bulk supply requirements for your specific industrial application.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-accent">
              View Our Products <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
