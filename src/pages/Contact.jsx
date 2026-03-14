import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

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
            // TODO: Ensure a real Web3Forms Access Key is placed here for production
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', marginTop: '4rem' }}>
                    <div>
                        <p style={{ marginBottom: '3rem' }}>
                            Our technical experts are available to discuss your specific requirements, provide documentation, and arrange for samples.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: 'var(--accent)' }}><MapPin size={24} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Head Office</h4>
                                    <p style={{ fontSize: '0.875rem' }}>Gratia Aeterna trading CO
                                        NO: 13 ,Stalin Nagar
                                        Athipatu Railway Station Road, Chennai 601203, Tamil Nadu

                                        .</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: 'var(--accent)' }}><Phone size={24} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>GST number</h4>
                                    <p style={{ fontSize: '0.875rem' }}>33ETTPA1082G1ZS1</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ color: 'var(--accent)' }}><Mail size={24} /></div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Email Inquiries</h4>
                                    <p style={{ fontSize: '0.875rem' }}>gratiaaeterna@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'white', border: '1px solid var(--border-light)', padding: '3rem', borderRadius: '4px' }}>
                        <h3 style={{ marginBottom: '2rem' }}>Send Inquiry</h3>

                        {submitStatus === 'success' ? (
                            <div style={{ padding: '2rem', background: '#e6f4ea', color: '#137333', borderRadius: '4px', textAlign: 'center' }}>
                                <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>Thank you for your inquiry. Our team will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <input type="checkbox" name="botcheck" style={{ display: 'none' }} checked={formData.botcheck} onChange={handleChange} />

                                <div style={{ gridColumn: 'span 1' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: errors.name ? '1px solid red' : '1px solid var(--border-light)' }} placeholder="Your Name" />
                                    {errors.name && <span style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                                </div>

                                <div style={{ gridColumn: 'span 1' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Company Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: errors.company ? '1px solid red' : '1px solid var(--border-light)' }} placeholder="Your Company" />
                                    {errors.company && <span style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.company}</span>}
                                </div>

                                <div style={{ gridColumn: 'span 1' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Email <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: errors.email ? '1px solid red' : '1px solid var(--border-light)' }} placeholder="you@company.com" />
                                    {errors.email && <span style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                                </div>

                                <div style={{ gridColumn: 'span 1' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Phone / WhatsApp <span style={{ color: 'red' }}>*</span></label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: errors.phone ? '1px solid red' : '1px solid var(--border-light)' }} placeholder="+1 (555) 000-0000" />
                                    {errors.phone && <span style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
                                </div>

                                <div style={{ gridColumn: 'span 1' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Industry Type</label>
                                    <select name="industry" value={formData.industry} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', backgroundColor: 'white' }}>
                                        <option value="">Select Industry</option>
                                        <option value="Electrical Industry">Electrical Industry</option>
                                        <option value="Cosmetics Industry">Cosmetics Industry</option>
                                        <option value="Paint & Coatings">Paint & Coatings</option>
                                        <option value="Metallurgy">Metallurgy</option>
                                        <option value="Manufacturing">Manufacturing</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div style={{ gridColumn: 'span 1' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Product <span style={{ color: 'red' }}>*</span></label>
                                    <select name="product" value={formData.product} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: errors.product ? '1px solid red' : '1px solid var(--border-light)', backgroundColor: 'white' }}>
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
                                    {errors.product && <span style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.product}</span>}
                                </div>

                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Quantity Required</label>
                                    <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)' }} placeholder="Enter quantity (kg / tons)" />
                                </div>

                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-light)', minHeight: '120px' }} placeholder="Please share your requirement details"></textarea>
                                </div>

                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', cursor: 'pointer' }}>
                                        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} style={{ marginTop: '0.25rem' }} />
                                        <span>I agree to be contacted regarding my inquiry. <span style={{ color: 'red' }}>*</span></span>
                                    </label>
                                    {errors.consent && <span style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.consent}</span>}
                                </div>

                                <div style={{ gridColumn: 'span 2' }}>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LcAV4osAAAAAMPExwNtVrDRleqos6vN7Dtfoper"
                                        onChange={() => setErrors(prev => ({ ...prev, recaptcha: '' }))}
                                    />
                                    {errors.recaptcha && <span style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.recaptcha}</span>}
                                </div>

                                {submitStatus === 'error' && (
                                    <div style={{ gridColumn: 'span 2', padding: '1rem', background: '#fce8e6', color: '#c5221f', borderRadius: '4px', fontSize: '0.875rem' }}>
                                        An error occurred while sending your request. Please check your data and try again.
                                    </div>
                                )}

                                <div style={{ gridColumn: 'span 2' }}>
                                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}>
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
