import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronLeft, Package, Activity, Info, ChevronRight } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    const [activeImage, setActiveImage] = useState(product?.images?.[0] || null);

    useEffect(() => {
        if (product && product.images) {
            setActiveImage(product.images[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <div className="container section-padding">
                <h1>Product not found</h1>
                <Link to="/products" className="btn btn-primary">Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="product-detail-page">
            <div className="container">
                <Link to="/products" className="back-link">
                    <ChevronLeft size={16} /> Back to Catalog
                </Link>

                <div className="product-layout">
                    {/* Gallery Sidebar */}
                    <div className="product-gallery">
                        <div className="main-image-container">
                            <img src={activeImage.url} alt={product.name} className="main-image" />
                            <div className="image-badge">{activeImage.label}</div>
                        </div>
                        <div className="thumbnail-grid">
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail-item ${activeImage === img ? 'active' : ''}`}
                                    onClick={() => setActiveImage(img)}
                                >
                                    <img src={img.url} alt={`${product.name} ${index}`} />
                                    <span className="thumb-label">{img.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="product-info">
                        <span className="category-label">{product.category}</span>
                        <h1 className="product-title">{product.name}</h1>

                        <section className="info-section">
                            <h3><Info size={20} /> Description</h3>
                            <p>{product.description}</p>
                        </section>

                        <section className="info-section">
                            <h3><Package size={20} /> Applications</h3>
                            <ul className="apps-list">
                                {product.applications.map((app, index) => (
                                    <li key={index}><ChevronRight size={14} /> {app}</li>
                                ))}
                            </ul>
                        </section>

                        <div className="product-actions">
                            <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-accent btn-large">Get Product Specifications</Link>
                            <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-outline btn-large" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                                Inquire for Bulk Pricing
                            </Link>
                        </div>

                        <div className="shipping-info">
                            <Activity size={16} />
                            <span>Available for immediate global export in specialized industrial packaging.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
