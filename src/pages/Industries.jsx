import React from 'react';
import './Industries.css';

const Industries = () => {
    const industries = [
        { title: 'Electrical & Electronics', desc: 'Providing high-purity quartz and silica for semiconductor manufacturing and insulating materials for high-voltage applications.' },
        { title: 'Cosmetics & Personal Care', desc: 'Supplying ethically sourced mica and minerals for pigments, texture enhancers, and UV protection in premium cosmetic lines.' },
        { title: 'Paint & Coatings', desc: 'Offering a range of industrial fillers and extenders that improve durability, weather resistance, and finish quality.' },
        { title: 'Metallurgy', desc: 'Supplying essential fluxing agents like fluorite to optimize steel production and other smelting operations.' },
        { title: 'Ceramics & Glass', desc: 'Delivering consistent, high-quality feldspar and minerals for high-strength ceramics and specialty glass products.' }
    ];

    return (
        <div className="page-container section-padding">
            <div className="container">
                <span className="subtitle">Global Applications</span>
                <h1>Industries We Serve</h1>
                <div className="industries-page-grid">
                    {industries.map((ind, i) => (
                        <div key={i} className="industry-page-card">
                            <h3 style={{ marginBottom: '1rem' }}>{ind.title}</h3>
                            <p style={{ margin: 0 }}>{ind.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Industries;
