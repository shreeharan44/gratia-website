import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronRight, Database, Box } from 'lucide-react';

const Products = () => {
    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <div className="page-container section-padding">
            <div className="container">
                <span className="subtitle">Technical Catalog</span>
                <h1>Our Mineral Products</h1>
                <p style={{ maxWidth: '600px', marginBottom: '3rem' }}>
                    Explore our range of high-purity industrial minerals and rare-earth elements, processed to meet stringent global manufacturing standards.
                </p>

                {Object.entries(groupedProducts).map(([category, items]) => (
                    <div key={category} style={{ marginBottom: '5rem' }}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            marginBottom: '2.5rem',
                            paddingBottom: '0.75rem',
                            borderBottom: '2px solid var(--accent)',
                            display: 'inline-block',
                            color: 'var(--primary)',
                            fontWeight: 700
                        }}>
                            {category}
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                            {items.map((p) => (
                                <Link to={`/products/${p.id}`} key={p.id} className="product-card" style={{ textDecoration: 'none', textAlign: 'left' }}>
                                    <div className="product-card-bg"></div>
                                    <div className="product-card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                            <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '4px' }}>
                                                {p.category.includes('Rare') ? <Database size={20} /> : <Box size={20} />}
                                            </div>
                                            <span style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>{p.category}</span>
                                        </div>

                                        <h3 style={{ margin: '0 0 1rem 0' }}>{p.name}</h3>
                                        <p style={{ fontSize: '0.875rem', marginBottom: '2rem', flexGrow: 1 }}>{p.description}</p>

                                        <div className="learn-more" style={{ marginTop: 'auto' }}>
                                            View Full Specifications <ChevronRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
