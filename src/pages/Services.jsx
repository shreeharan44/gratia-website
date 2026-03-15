import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, Ship, Globe, Mountain, Handshake, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Package size={32} />,
    title: 'Industrial Mineral Supply',
    desc: 'Bulk supply of high-quality industrial minerals for global industries. We source quartz, feldspar, fluorite, and mica from established mining operations.',
    highlights: ['Bulk quantities available', 'Consistent grading & purity', 'Custom packaging options'],
  },
  {
    icon: <Globe size={32} />,
    title: 'Metal Ore Trading',
    desc: 'International sourcing and trading of strategic metal ores including copper, nickel, tungsten, tantalum, and niobium for metal processing industries.',
    highlights: ['Strategic ore procurement', 'Global market access', 'Competitive pricing'],
  },
  {
    icon: <Ship size={32} />,
    title: 'Global Export Logistics',
    desc: 'Efficient shipping and export coordination for international buyers. We manage complete export documentation, freight forwarding, and port logistics.',
    highlights: ['Port-to-port delivery', 'Export documentation', 'Multi-modal transport'],
  },
  {
    icon: <Mountain size={32} />,
    title: 'Mine Sourcing & Procurement',
    desc: 'Direct procurement from mining operations ensuring quality control at the source. Our mining partnerships guarantee pricing advantage and supply reliability.',
    highlights: ['Direct mine partnerships', 'Quality at source', 'Cost-effective procurement'],
  },
  {
    icon: <Handshake size={32} />,
    title: 'Long-Term Supply Partnerships',
    desc: 'Reliable long-term supply agreements for manufacturers and industrial buyers. We structure contracts to ensure consistent supply at stable pricing.',
    highlights: ['Annual supply contracts', 'Stable pricing agreements', 'Priority allocation'],
  },
];

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | Industrial Mineral Supply & Export | Gratia Aeterna Trading Co.';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'Gratia Aeterna Trading Co. offers industrial mineral supply, metal ore trading, global export logistics, mine sourcing, and long-term supply partnerships for manufacturers worldwide.';
  }, []);

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero services-hero">
        <div className="container">
          <span className="subtitle">What We Offer</span>
          <h1>Our Services</h1>
          <p>
            From direct mine sourcing to international export logistics — Gratia Aeterna Trading Co.
            provides end-to-end mineral supply solutions for global industrial buyers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Core Capabilities</span>
            <h2>How We Serve Industrial Buyers</h2>
            <div className="section-divider"></div>
          </div>
          <div className="services-grid">
            {services.map((svc, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <ul className="service-highlights">
                  {svc.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="highlight-dot"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Banner */}
      <section className="services-chain-section">
        <div className="container">
          <div className="services-chain-inner">
            <div className="chain-text">
              <span className="subtitle">End-to-End</span>
              <h2>Complete Supply Chain Coverage</h2>
              <p>
                From identifying the right mining source to delivering bulk minerals to your facility —
                we manage the entire supply chain so you can focus on production.
              </p>
              <Link to="/global-supply" className="btn btn-accent" style={{ marginTop: '1.5rem' }}>
                Learn About Global Supply <ArrowRight size={16} />
              </Link>
            </div>
            <div className="chain-steps">
              {[
                { step: '01', label: 'Mine Identification' },
                { step: '02', label: 'Quality Assessment' },
                { step: '03', label: 'Procurement' },
                { step: '04', label: 'Export Logistics' },
                { step: '05', label: 'Delivery' },
              ].map((s, i) => (
                <div key={i} className="chain-step">
                  <div className="chain-step-num">{s.step}</div>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Start Your Mineral Supply Partnership?</h2>
          <p style={{ maxWidth: '560px', margin: '1rem auto 2.5rem' }}>
            Contact our team to discuss bulk supply requirements, pricing, and export logistics for your specific needs.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ gap: '0.5rem' }}>
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
