import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { ChevronRight, Globe, Shield, Zap, Layers, Mountain, Ship, Handshake, Package, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
    useEffect(() => {
        document.title = 'Gratia Aeterna Trading Co. | Global Supplier of Industrial Minerals & Strategic Metal Ores';
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = 'Gratia Aeterna Trading Co. specializes in the mining, sourcing, and international trading of high-quality industrial minerals and metal ores for global industries. From mines to markets worldwide.';
    }, []);

    const services = [
        { icon: <Package size={28} />, title: 'Industrial Mineral Supply', desc: 'Bulk supply of quartz, feldspar, fluorite, and mica for global industries.' },
        { icon: <Globe size={28} />, title: 'Metal Ore Trading', desc: 'International sourcing and trading of strategic metal ores.' },
        { icon: <Ship size={28} />, title: 'Global Export Logistics', desc: 'Efficient shipping and export coordination for international buyers.' },
        { icon: <Mountain size={28} />, title: 'Mine Sourcing & Procurement', desc: 'Direct procurement from mining operations for quality and pricing advantage.' },
    ];

    const strengths = [
        'Direct sourcing from mines',
        'Reliable bulk supply capability',
        'International trading expertise',
        'Competitive pricing',
        'Long-term supply partnerships',
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1>From Mines to Markets</h1>
                        <h2>Reliable Mineral Supply Worldwide</h2>
                        <p className="hero-subtext">
                            Gratia Aeterna Trading Co. specializes in the mining, sourcing, and international trading of high-quality industrial minerals and metal ores for global industries.
                        </p>
                        <div className="hero-btns">
                            <Link to="/products" className="btn btn-accent" style={{ padding: '0.85rem 2rem' }}>
                                View Products <ChevronRight size={16} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline" style={{ padding: '0.85rem 2rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Trust Bar overlapping hero and next section */}
                <div className="hero-trust-bar">
                    <div className="container">
                        <div className="hero-trust-items">
                            <div className="hero-trust-item">
                                <Shield size={22} />
                                <span>High-Quality Minerals</span>
                            </div>
                            <div className="hero-trust-divider"></div>
                            <div className="hero-trust-item">
                                <Globe size={22} />
                                <span>Global Supply Network</span>
                            </div>
                            <div className="hero-trust-divider"></div>
                            <div className="hero-trust-item">
                                <Handshake size={22} />
                                <span>Trusted Partnerships</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Introduction */}
            <section className="company-intro">
                <div className="container company-intro-grid">
                    <div className="company-intro-text">
                        <span className="subtitle">Who We Are</span>
                        <h2 className="section-title">About Gratia Aeterna Trading Co.</h2>
                        <div className="section-divider"></div>
                        <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)', fontWeight: '500' }}>
                            Gratia Aeterna Trading Co. is engaged in the mining, trading, and global supply of industrial metallic and non-metallic minerals.
                        </p>
                        <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-light)', marginTop: '1rem' }}>
                            With strong mining partnerships and sourcing networks, we provide reliable mineral resources to manufacturers and industrial buyers worldwide, bridging the gap between local mines and international markets.
                        </p>
                        <Link to="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                            Learn More <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="company-intro-image">
                        <img
                            src="/assets/images/image3.png"
                            alt="Mining operations and industrial minerals"
                            loading="lazy"
                        />
                        <div className="intro-image-badge">
                            <CheckCircle size={20} />
                            <span>Direct Mine Sourcing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories (Card UI Redesign) */}
            <section className="product-categories-home section-padding bg-alt">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center' }}>
                        <span className="subtitle">Premium Materials</span>
                        <h2 className="section-title">Our Product Portfolio</h2>
                        <div className="section-divider" style={{ margin: '0 auto' }}></div>
                    </div>

                    <div className="home-categories-wrapper">
                        {/* Industrial Minerals Card */}
                        <Link to="/products" className="home-category-card">
                            <img src="/assets/products/quartz/raw1.png" alt="Industrial Minerals" className="hc-image-bg" />
                            <div className="hc-content">
                                <div className="hc-badge">
                                    <Layers size={16} /> Non-Metallic
                                </div>
                                <h3>Industrial Minerals</h3>
                                <p>
                                    High-purity non-metallic minerals forming the backbone of ceramics, glass, metallurgy, and construction industries.
                                </p>
                                <div className="hc-tags">
                                    {['Quartz', 'Potash Feldspar', 'Soda Feldspar', 'Fluorite', 'Mica'].map(item => (
                                        <span key={item} className="hc-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>

                        {/* Strategic Metal Ores Card */}
                        <Link to="/products" className="home-category-card">
                            <img src="/assets/products/copper/raw1.jpeg" alt="Strategic Metal Ores" className="hc-image-bg" />
                            <div className="hc-content">
                                <div className="hc-badge">
                                    <Zap size={16} /> Strategic Metals
                                </div>
                                <h3>Strategic Metal Ores</h3>
                                <p>
                                    Critical metal ores essential for advanced electronics, green energy, aerospace, and heavy industrial manufacturing.
                                </p>
                                <div className="hc-tags">
                                    {['Copper Ore', 'Nickel Ore', 'Tungsten', 'Tantalum', 'Niobium'].map(item => (
                                        <span key={item} className="hc-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="services-overview section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">What We Do</span>
                        <h2 className="section-title">Our Core Services</h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="services-preview-grid">
                        {services.map((svc, i) => (
                            <div key={i} className="service-preview-card">
                                <div className="svc-icon">{svc.icon}</div>
                                <h3>{svc.title}</h3>
                                <p>{svc.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                        <Link to="/services" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                            View All Services <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="industries section-padding bg-alt">
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center' }}>
                        <span className="subtitle">Global Sectors</span>
                        <h2 className="section-title">Industries We Serve</h2>
                        <div className="section-divider" style={{ margin: '0 auto' }}></div>
                    </div>
                    <div className="industry-grid">
                        {[
                            { icon: '🏺', title: 'Ceramics', desc: 'Premium feldspar for high-strength ceramic tiles and bodies.' },
                            { icon: '🔬', title: 'Glass Manufacturing', desc: 'Quartz and feldspar for flat, container, and specialty glass.' },
                            { icon: '⚙️', title: 'Metallurgy', desc: 'Fluorite flux and metal ores for steel and alloy production.' },
                            { icon: '💡', title: 'Electronics Industry', desc: 'Quartz, mica, and tantalum for semiconductor and device manufacturing.' },
                            { icon: '⚗️', title: 'Chemical Industry', desc: 'Fluorite and specialty minerals for chemical manufacturing.' },
                        ].map((industry, index) => (
                            <div key={index} className="industry-item">
                                <div className="industry-icon-box">
                                    <span className="industry-emoji">{industry.icon}</span>
                                </div>
                                <h3>{industry.title}</h3>
                                <p>{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                        <Link to="/industries" className="btn btn-outline">
                            Learn More <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Company Strengths (Fixed Layout) */}
            <section className="strengths-section">
                <div className="container strengths-inner">
                    <div className="strengths-text">
                        <span className="subtitle" style={{ color: 'var(--accent)' }}>Why Choose Us</span>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', textTransform: 'none', marginBottom: '1rem', lineHeight: '1.2' }}>Our Competitive Advantage</h2>
                        <div className="section-divider" style={{ background: 'var(--accent)' }}></div>
                        <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            With direct mine partnerships and international logistics expertise, we deliver
                            consistent quality and reliability that industrial buyers depend on for their critical supply chains.
                        </p>
                        <Link to="/contact" className="btn btn-accent" style={{ marginTop: '2.5rem' }}>
                            Request a Quote <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="strengths-list">
                        {strengths.map((s, i) => (
                            <div key={i} className="strength-item">
                                <CheckCircle size={24} className="strength-icon" />
                                <span>{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-section section-padding">
                <div className="container">
                    <div className="cta-banner">
                        <div className="cta-banner-text">
                            <h2>Ready for a Bulk Supply Partnership?</h2>
                            <p>Contact us for pricing, bulk supply inquiries, and international export orders for industrial minerals and metal ores.</p>
                        </div>
                        <div className="cta-banner-actions">
                            <Link to="/contact" className="btn btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>
                                Request a Quote
                            </Link>
                            <Link to="/products" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
