import { Link } from 'react-router-dom';
import './Home.css';
import { ChevronRight, Award, Globe, Shield, Zap, Layers, Beaker, Pipette, Palette, HardHat, Database, Box } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1>High-Quality Industrial Minerals for Global Applications</h1>
                        <p className="hero-subtext">
                            Supplying premium mineral materials including quartz, feldspar, mica, fluorite and rare-earth elements for industrial manufacturing.
                        </p>
                        <div className="hero-btns">

                            <Link to="/contact" className="btn btn-accent">Request Quote</Link>
                            <Link to="/products" className="btn btn-outline" style={{ border: '1px solid white', color: 'white' }}>View Products</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="trust-indicators section-padding">
                <div className="container">
                    <div className="trust-grid">

                        <div className="trust-item">
                            <Globe className="trust-icon" />
                            <div className="trust-text">
                                <h3>Global Export</h3>
                                <p>50+ Countries Served</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <Shield className="trust-icon" />
                            <div className="trust-text">
                                <h3>Technical Support</h3>
                                <p>Expert Guidance</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <Zap className="trust-icon" />
                            <div className="trust-text">
                                <h3>Rapid Logistics</h3>
                                <p>Global Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="product-categories-home section-padding">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-header">
                        <span className="subtitle">Premium Materials</span>
                        <h2>Explore Our Resources</h2>
                    </div>

                    <div className="home-categories-wrapper">

                        {/* Category 1 */}
                        <div className="home-category-row">
                            <div className="hc-content">
                                <div className="hc-badge">
                                    <Zap size={20} /> <span>High-Performance</span>
                                </div>
                                <h3 style={{ textTransform: 'none' }}>Rare Earth Elements</h3>
                                <p>
                                    Powering the future of technology with critical materials essential for advanced electronics, green energy, and aerospace innovations.
                                </p>
                                <div className="hc-tags">
                                    {['COPPER', 'NICKEL', 'TUNGSTEN', 'TANTALUM & NIOBIUM'].map(item => (
                                        <span key={item} className="hc-tag">{item}</span>
                                    ))}
                                </div>
                                <Link to="/products" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start' }}>
                                    Explore Rare Earths <ChevronRight size={18} />
                                </Link>
                            </div>
                            <div className="hc-image">
                                <img src="/assets/products/rare-earth-elements.png" alt="Rare Earth Elements" style={{ width: '100%', height: '100%', minHeight: '500px', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="home-category-row reverse">
                            <div className="hc-content">
                                <div className="hc-badge">
                                    <Layers size={20} /> <span>Foundation Materials</span>
                                </div>
                                <h3 style={{ textTransform: 'none' }}>Industrial Minerals</h3>
                                <p>
                                    High-purity non-metallic minerals forming the backbone of ceramics, glass, metallurgy, and construction industries globally.
                                </p>
                                <div className="hc-tags">
                                    {['MICA', 'QUARTZ', 'FELDSPAR', 'FLUORITE'].map(item => (
                                        <span key={item} className="hc-tag">{item}</span>
                                    ))}
                                </div>
                                <Link to="/products" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start' }}>
                                    Explore Minerals <ChevronRight size={18} />
                                </Link>
                            </div>
                            <div className="hc-image">
                                <img src="/assets/products/quartz/raw1.png" alt="Industrial Minerals" style={{ width: '100%', height: '100%', minHeight: '500px', objectFit: 'cover' }} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="industries section-padding bg-alt">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Global Sectors</span>
                        <h2>Industries we serve</h2>
                    </div>
                    <div className="industry-grid">
                        {[
                            { icon: <Zap />, title: 'Electronics', desc: 'High-purity quartz and rare-earth materials for circuitry.' },
                            { icon: <Beaker />, title: 'Cosmetics', desc: 'Natural mica and minerals for skincare and pigments.' },
                            { icon: <Palette />, title: 'Paint & Coatings', desc: 'Industrial grade extenders and fillers for durability.' },
                            { icon: <HardHat />, title: 'Metallurgy', desc: 'Fluorite and fluxing agents for steel production.' },
                            { icon: <Layers />, title: 'Ceramics', desc: 'Premium feldspar for high-strength ceramic products.' },
                            { icon: <Pipette />, title: 'Pharmaceutical', desc: 'Purified mineral compounds for healthcare applications.' }
                        ].map((industry, index) => (
                            <div key={index} className="industry-item">
                                <div className="industry-icon-box">{industry.icon}</div>
                                <h3>{industry.title}</h3>
                                <p>{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Gallery Preview */}
            <section className="gallery section-padding">
                <div className="container">
                    <div className="section-header">
                        <span className="subtitle">Visual Catalog</span>
                        <h2>Material Showcase</h2>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-item large">
                            <div className="gallery-overlay">
                                <h3>Quartz Crystals</h3>
                                <p>Pure Industrial Grade</p>
                            </div>
                            <img src="/assets/products/quartz/raw1.png" alt="Quartz" />
                        </div>
                        <div className="gallery-item">
                            <div className="gallery-overlay">
                                <h3>Mica Flakes</h3>
                                <p>Cosmetic Grade</p>
                            </div>
                            <img src="/assets/products/mica/raw1.png" alt="Mica" />
                        </div>
                        <div className="gallery-item">
                            <div className="gallery-overlay">
                                <h3>Copper </h3>
                                <p>Metallurgical Grade</p>
                            </div>
                            <img src="/assets/products/copper/raw1.jpeg" alt="Copper" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
