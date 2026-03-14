import React from 'react';

const TermsOfService = () => {
    return (
        <div className="page-container section-padding">
            <div className="container">
                <span className="subtitle">Legal</span>
                <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>

                <div style={{ maxWidth: '800px', lineHeight: '1.8' }}>
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>1. Website Usage Terms</h3>
                    <p>
                        By accessing and using the Gratia Minerals website, you agree to comply with and be bound by these Terms of Service. You must use this site responsibly and refrain from any activity that disrupts or interferes with its operation or security.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>2. Content Ownership</h3>
                    <p>
                        All content, including text, graphics, logos, images, and product descriptions, is the property of Gratia Minerals or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>3. Liability Disclaimers</h3>
                    <p>
                        The information on this website is provided "on an as-is basis". Gratia Minerals makes no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of the content. We shall not be held liable for any direct, indirect, or consequential damages arising from the use of our website or reliance on its content.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>4. Governing Law</h3>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of Tamil Nadu, India, without regard to its conflict of law principles.
                    </p>

                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>5. Contact Us</h3>
                    <p>
                        For any questions concerning these terms, please contact us at gratiaaeterna@gmail.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
