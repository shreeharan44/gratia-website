import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="page-container section-padding">
            <div className="container">
                <span className="subtitle">Legal</span>
                <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
                
                <div style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>
                    
                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Information We Collect</h3>
                    <p>
                        We collect contact information submitted through our inquiry form for the purpose of responding to business inquiries. The personal data collected includes your name, email address, phone number, and any other details you choose to provide in your message.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. How We Use Your Information</h3>
                    <p>
                        We use the collected information solely to correspond with you regarding your inquiries, provide requested services or product details, and manage our business relationship.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Data Sharing</h3>
                    <p>
                        We do not sell, trade, or otherwise share your personal data with third parties. Your information is kept strictly confidential and accessed only by authorized personnel.
                    </p>
                    
                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Contact Us</h3>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at gratiaaeterna@gmail.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
