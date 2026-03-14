import React from 'react';

const About = () => {
    return (
        <div className="page-container section-padding">
            <div className="container">
                <span className="subtitle">Our Heritage</span>
                <h1>About Gratia Minerals</h1>
                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem' }}>
                    <div>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                            Gratia Minerals is a premier supplier of high-grade industrial minerals, serving the global manufacturing sector for over two decades. Our commitment to technical excellence and logistics reliability has made us a trusted partner for Fortune 500 companies.
                        </p>
                        <p>
                            We specialize in the extraction, processing, and global distribution of Quartz, Feldspar, Mica, and Rare-Earth elements. Our state-of-the-art laboratory ensures that every batch meets the stringent specifications required by our diverse clientele.
                        </p>
                    </div>
                    <div style={{ background: '#f8fafc', padding: '3rem', borderRadius: '4px' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Our Export Capabilities</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>✔</span> Port-to-Port global logistics</li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>✔</span> Specialized industrial packaging</li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>✔</span> Comprehensive export documentation</li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent)' }}>✔</span> Multi-modal transport options</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
