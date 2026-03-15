import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Receipt } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

const Contact = () => {
    const [searchParams] = useSearchParams();
    const initialProduct = searchParams.get('product') || '';

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        product: initialProduct,
        quantity: '',
        message: '',
        consent: false,
        botcheck: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const recaptchaRef = useRef(null);

    useEffect(() => {
        if (initialProduct && formData.product !== initialProduct) {
            setFormData(prev => ({ ...prev, product: initialProduct }));
        }
    }, [initialProduct, formData.product]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.company.trim()) newErrors.company = 'Company Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone / WhatsApp is required';
        if (!formData.product) newErrors.product = 'Product is required';
        if (!formData.consent) newErrors.consent = 'You must agree to be contacted';

        const recaptchaValue = recaptchaRef.current?.getValue();
        if (!recaptchaValue) {
            newErrors.recaptcha = 'Please complete the reCAPTCHA';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.botcheck) {
            return; // Honeypot filled
        }

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('access_key', '82c0a740-e07b-49f5-ac4a-45413cd780b3');
            formDataToSend.append('subject', 'New Product Inquiry from Website');
            formDataToSend.append('Name', formData.name);
            formDataToSend.append('Company Name', formData.company);
            formDataToSend.append('Email', formData.email);
            formDataToSend.append('Phone', formData.phone);
            if (formData.industry) formDataToSend.append('Industry', formData.industry);
            formDataToSend.append('Product', formData.product);
            if (formData.quantity) formDataToSend.append('Quantity Required', formData.quantity);
            if (formData.message) formDataToSend.append('Message', formData.message);
            formDataToSend.append('Submission Time', new Date().toLocaleString());

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    industry: '',
                    product: '',
                    quantity: '',
                    message: '',
                    consent: false,
                    botcheck: ''
                });
                if (recaptchaRef.current) recaptchaRef.current.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page-container section-padding">
            <div className="container">
                <span className="subtitle">Get In Touch</span>
                <h1>Contact Us</h1>

                <div className="contact-layout">
                    {/* Contact Info Sidebar */}
                    <div className="contact-info">
                        <p style={{ marginBottom: '3rem' }}>
                            Our technical experts are available to discuss your specific requirements, provide documentation, and arrange for samples.
                        </p>

                        <div className="contact-details">
                            {/* Address 1 */}
                            <div className="contact-detail-item">
                                <div style={{ color: 'var(--accent)', flexShrink: 0 }}><MapPin size={24} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Head Office</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Gratia Aeterna Trading CO<br />
                                        NO: 13, Stalin Nagar<br />
                                        Athipatu Railway Station Road,<br />
                                        Chennai 601203, Tamil Nadu</p>
                                </div>
                            </div>
                            {/* Address 2 */}
                            <div className="contact-detail-item">
                                <div style={{ color: 'var(--accent)', flexShrink: 0 }}><MapPin size={24} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Business Hub</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Gratia Aeterna Trading CO<br />
                                        NO: 3, Raj Nagar<br />
                                        Near Gau Matha Square,<br />
                                        Rajsamand 313324, Rajasthan</p>
                                </div>
                            </div>
                            {/* GST Numbers */}
                            <div className="contact-detail-item">
                                <div style={{ color: 'var(--accent)', flexShrink: 0 }}><Receipt size={24} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>GST Numbers</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Tamil Nadu: 33ETTPA1082G1ZS<br />
                                        Rajasthan: 08ETTPA1082G1ZL</p>
                                </div>
                            </div>
                            {/* WhatsApp */}
                            <div className="contact-detail-item">
                                <div style={{ color: 'var(--accent)', flexShrink: 0 }}><MessageCircle size={24} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>WhatsApp</h4>
                                    <p style={{ fontSize: '0.875rem' }}>+260 969065588</p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="contact-detail-item">
                                <div style={{ color: 'var(--accent)', flexShrink: 0 }}><Mail size={24} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Email Inquiries</h4>
                                    <p style={{ fontSize: '0.875rem' }}>gratiaaeterna@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="contact-form-box">
                        <h3 style={{ marginBottom: '2rem' }}>Send Inquiry</h3>

                        {submitStatus === 'success' ? (
                            <div className="form-success-msg">
                                <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>Thank you for your inquiry. Our team will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="inquiry-form">
                                <input type="checkbox" name="botcheck" style={{ display: 'none' }} checked={formData.botcheck} onChange={handleChange} />

                                {/* Row 1: Name + Company */}
                                <div className="form-group">
                                    <label className="form-label">Name <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`form-input${errors.name ? ' input-error' : ''}`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Company Name <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={`form-input${errors.company ? ' input-error' : ''}`}
                                        placeholder="Your Company"
                                    />
                                    {errors.company && <span className="error-text">{errors.company}</span>}
                                </div>

                                {/* Row 2: Email + Phone */}
                                <div className="form-group">
                                    <label className="form-label">Email <span className="required">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`form-input${errors.email ? ' input-error' : ''}`}
                                        placeholder="you@company.com"
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Phone / WhatsApp <span className="required">*</span></label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`form-input${errors.phone ? ' input-error' : ''}`}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                </div>

                                {/* Row 3: Industry + Product */}
                                <div className="form-group">
                                    <label className="form-label">Industry Type</label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="form-input form-select"
                                    >
                                        <option value="">Select Industry</option>
                                        <option value="Electrical Industry">Electrical Industry</option>
                                        <option value="Cosmetics Industry">Cosmetics Industry</option>
                                        <option value="Paint & Coatings">Paint & Coatings</option>
                                        <option value="Metallurgy">Metallurgy</option>
                                        <option value="Manufacturing">Manufacturing</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Product <span className="required">*</span></label>
                                    <select
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        className={`form-input form-select${errors.product ? ' input-error' : ''}`}
                                    >
                                        <option value="">Select Product</option>
                                        <option value="Quartz">Quartz</option>
                                        <option value="Feldspar (Soda)">Feldspar (Soda)</option>
                                        <option value="Feldspar (Potash)">Feldspar (Potash)</option>
                                        <option value="Mica">Mica</option>
                                        <option value="Fluorite">Fluorite</option>
                                        <option value="Copper">Copper</option>
                                        <option value="Nickel">Nickel</option>
                                        <option value="Tungsten">Tungsten</option>
                                        <option value="Niobium">Niobium</option>
                                    </select>
                                    {errors.product && <span className="error-text">{errors.product}</span>}
                                </div>

                                {/* Full-width: Quantity */}
                                <div className="form-group form-group-full">
                                    <label className="form-label">Quantity Required</label>
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="form-input"
                                        placeholder="Enter quantity (kg / tons)"
                                    />
                                </div>

                                {/* Full-width: Message */}
                                <div className="form-group form-group-full">
                                    <label className="form-label">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-input form-textarea"
                                        placeholder="Please share your requirement details"
                                    />
                                </div>

                                {/* Full-width: Consent */}
                                <div className="form-group form-group-full">
                                    <label className="consent-label">
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            checked={formData.consent}
                                            onChange={handleChange}
                                        />
                                        <span>I agree to be contacted regarding my inquiry. <span className="required">*</span></span>
                                    </label>
                                    {errors.consent && <span className="error-text">{errors.consent}</span>}
                                </div>

                                {/* Full-width: reCAPTCHA */}
                                <div className="form-group form-group-full recaptcha-wrapper">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LcAV4osAAAAAMPExwNtVrDRleqos6vN7Dtfoper"
                                        onChange={() => setErrors(prev => ({ ...prev, recaptcha: '' }))}
                                    />
                                    {errors.recaptcha && <span className="error-text">{errors.recaptcha}</span>}
                                </div>

                                {submitStatus === 'error' && (
                                    <div className="form-group form-group-full form-error-msg">
                                        An error occurred while sending your request. Please check your data and try again.
                                    </div>
                                )}

                                {/* Full-width: Submit */}
                                <div className="form-group form-group-full">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary form-submit-btn"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
