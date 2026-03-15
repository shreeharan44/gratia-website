import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { seoPages } from '../data/seoPages';
import { ChevronRight } from 'lucide-react';
import './Products.css';

// Map existing product IDs to SEO page slugs
const seoSlugMap = {
  'quartz': '/quartz-supplier',
  'feldspar-potash': '/potash-feldspar-supplier',
  'feldspar-soda': '/soda-feldspar-supplier',
  'fluorite': '/fluorite-supplier',
  'mica': '/mica-supplier',
  'copper': '/copper-ore-supplier',
  'nickel': '/nickel-ore-supplier',
  'tungsten': '/tungsten-supplier',
  'niobium': '/niobium-supplier',
};

// Define images per product for the gateway cards
const productImages = {
  'quartz': '/assets/products/quartz/raw1.png',
  'feldspar-potash': '/assets/products/feldspar-potash/raw1.jpeg',
  'feldspar-soda': '/assets/products/feldspar-soda/raw1.png',
  'fluorite': '/assets/products/fluorite/raw1.png',
  'mica': '/assets/products/mica/raw1.png',
  'copper': '/assets/products/copper/raw1.jpeg',
  'nickel': '/assets/products/nickel/raw.png',
  'tungsten': '/assets/products/tungsten/raw1.png',
  'niobium': '/assets/products/niobium/raw1.png',
};

const industrialMinerals = products.filter(p => p.category === 'NON METALLIC - INDUSTRIAL MINERALS');
const metalOres = products.filter(p => p.category === 'RARE EARTH ELEMENTS');

const ProductCard = ({ product }) => {
  const seoSlug = seoSlugMap[product.id];
  const imgSrc = productImages[product.id] || (product.images && product.images[0]?.url);

  return (
    <div className="gateway-card">
      <div className="gateway-card-img">
        <img
          src={imgSrc}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = '/assets/images/image3.png';
          }}
        />
        <div className="gateway-card-overlay">
          <Link to={`/products/${product.id}`} className="btn btn-primary gateway-detail-btn">
            Product Details
          </Link>
        </div>
      </div>
      <div className="gateway-card-body">
        <h3>{product.name}</h3>
        <p>{product.description.slice(0, 100)}…</p>
        <div className="gateway-card-actions">
          <Link to={`/products/${product.id}`} className="gateway-link">
            Full Catalog <ChevronRight size={14} />
          </Link>
          {seoSlug && (
            <Link to={seoSlug} className="gateway-link-seo">
              Bulk Supply Info <ChevronRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  useEffect(() => {
    document.title = 'Industrial Minerals & Strategic Metal Ores | Gratia Aeterna Trading Co.';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'Gratia Aeterna Trading Co. supplies industrial minerals (quartz, feldspar, fluorite, mica) and strategic metal ores (copper, nickel, tungsten, tantalum, niobium) worldwide.';
  }, []);

  return (
    <div className="products-page">
      {/* Hero */}
      <section className="page-hero products-hero">
        <div className="container">
          <span className="subtitle">Our Catalog</span>
          <h1>Industrial Minerals &amp; Strategic Metal Ores</h1>
          <p>
            Browse our complete portfolio of high-quality minerals and metal ores,
            each available for bulk supply and international export.
          </p>
        </div>
      </section>

      {/* Industrial Minerals */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Non-Metallic</span>
            <h2>Industrial Minerals</h2>
            <div className="section-divider"></div>
            <p style={{ maxWidth: '600px', marginTop: '1rem' }}>
              Gratia Aeterna Trading Co. specializes in sourcing and supplying high-quality industrial minerals
              for glass, ceramics, metallurgy, and electronics manufacturing.
            </p>
          </div>
          <div className="gateway-grid">
            {industrialMinerals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Strategic Metal Ores */}
      <section className="section-padding bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Critical Materials</span>
            <h2>Strategic Metal Ores</h2>
            <div className="section-divider"></div>
            <p style={{ maxWidth: '600px', marginTop: '1rem' }}>
              We source and supply strategic metal ores through strong mining partnerships and international
              logistics networks, ensuring reliable supply to manufacturers worldwide.
            </p>
          </div>
          <div className="gateway-grid">
            {metalOres.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Need Bulk Supply for Any of These Minerals?</h2>
          <p style={{ maxWidth: '520px', margin: '1rem auto 2.5rem', color: 'rgba(255,255,255,0.75)' }}>
            Contact our team with your specific requirements for pricing, grading, and international export.
          </p>
          <Link to="/contact" className="btn btn-accent">
            Bulk Supply Inquiry <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
