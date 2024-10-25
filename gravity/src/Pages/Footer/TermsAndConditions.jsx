import React from 'react';

const TermsAndConditions = () => {
  const containerStyle = {
    maxWidth: '60%',
    margin: '20px auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const titleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '16px',
  };

  const sectionStyle = {
    marginBottom: '12px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Terms and Conditions for Gravity Global Exports Sdn. Bhd.</h2>

      <div style={sectionStyle}>
        Welcome to the website of Gravity Global Exports Sdn. Bhd. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these Terms.
      </div>

      <div style={sectionStyle}>
        <strong>1. Acceptance of Terms</strong>
        <p>
          By using our website, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our website.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>2. Services</strong>
        <p>
          Gravity Global Exports Sdn. Bhd. provides [describe services, e.g., export of goods, logistics, etc.]. We reserve the right to modify or discontinue any part of our services at any time.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>3. User Responsibilities</strong>
        <p>
          You agree to:
          <ul>
            <li>Provide accurate and complete information when placing an order.</li>
            <li>Keep your account information updated.</li>
            <li>Not engage in any unlawful or prohibited activities while using our website.</li>
          </ul>
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>4. Intellectual Property</strong>
        <p>
          All content, trademarks, and other intellectual property on our website are the property of Gravity Global Exports Sdn. Bhd. or our licensors. You may not reproduce, distribute, or modify any content without our prior written consent.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>5. Limitation of Liability</strong>
        <p>
          To the fullest extent permitted by law, Gravity Global Exports Sdn. Bhd. shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>6. Indemnification</strong>
        <p>
          You agree to indemnify and hold harmless Gravity Global Exports Sdn. Bhd. and its affiliates from any claims, losses, or damages, including legal fees, arising from your use of our website or breach of these Terms.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>7. Changes to Terms</strong>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective upon posting on our website. Your continued use of the website after any changes indicates your acceptance of the new Terms.
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>8. Governing Law</strong>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
        </p>
      </div>

      <div style={sectionStyle}>
        <strong>9. Contact Information</strong>
        <p>
          If you have any questions or concerns about these Terms, please contact us at:
        </p>
        <p>
          <strong>Gravity Global Exports Sdn. Bhd.</strong><br />
          Co. Reg.No. 202101037574 (1437874-D)<br />
          No: 7, Jalan PU 7E,<br />
          Taman Tasik Prima,<br />
          47140 Puchong, Selangor.<br />
          <strong>Phone:</strong> +91 60184 64154<br />
          <strong>Email:</strong> info@gravityglobalexports.com
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
