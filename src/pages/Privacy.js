import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Privacy.module.css'; // Assuming you have a CSS module for styling

const Privacy = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.privacyInfo}>
      <h1>PRIVACY COMMITMENT</h1>
      <p>At {siteName}, we prioritize your privacy and the security of your information. This document outlines our commitment to safeguarding your data and explains the practices you agree to by using our services and website.</p>

      <h2>1. INFORMATION COLLECTION</h2>
      <p><strong>Personal Data:</strong> During transactions, we collect necessary details such as your name, email, postal address, and payment information to ensure the delivery of your furniture.</p>
      <p><strong>Interaction Data:</strong> We track your engagement with our website using technologies like cookies, noting your IP address, browser type, and furniture preferences.</p>

      <h2>2. INFORMATION USAGE</h2>
      <p><strong>Transaction Processing:</strong> Your personal data is used to manage and fulfill orders and to maintain communication throughout the transaction process, ensuring your furniture is delivered on time.</p>
      <p><strong>Communication:</strong> We utilize your contact information to send order confirmations, delivery updates, and any important notices related to your furniture purchase.</p>
      <p><strong>Customization:</strong> With your consent, we personalize your website experience by showing furniture recommendations based on your past interactions and preferences.</p>
      <p><strong>Service Enhancement:</strong> We analyze collected data to continuously improve our website and services, ensuring a better shopping experience for you.</p>

      <h2>3. INFORMATION DISCLOSURE</h2>
      <p><strong>Business Operations:</strong> Your data may be shared with third-party service providers under strict privacy agreements to assist with operations such as logistics and payment processing, ensuring your furniture reaches you safely.</p>
      <p><strong>Legal Obligations:</strong> We may disclose your information if required by law to protect our rights, ensure the security of our services, or uphold public safety.</p>

      <h2>4. SECURITY MEASURES</h2>
      <p>Our security protocols are designed to protect your personal information from unauthorized access and misuse. However, please note that transmitting information online carries inherent risks.</p>

      <h2>5. YOUR PRIVACY CHOICES</h2>
      <p><strong>Marketing Opt-out:</strong> You can opt out of receiving marketing messages about our furniture collections at any time using the links provided in our communications or by contacting us directly.</p>
      <p><strong>Cookies:</strong> Manage your cookie preferences through your web browser settings to control how we collect and use your browsing data.</p>

      <h2>6. CHILD SAFETY</h2>
      <p>We do not knowingly collect data from individuals under 16. Any inadvertently collected information will be promptly deleted from our systems.</p>

      <h2>7. POLICY UPDATES</h2>
      <p>We periodically update our Privacy Policy to reflect new practices. We encourage regular review of the policy, as continued use of our services post-update signifies acceptance of changes.</p>

      <p>For inquiries or more information about our privacy practices, please contact us at <a href={`mailto:info@${siteName.toLowerCase()}`}>info@{siteName}</a>. We are dedicated to promptly addressing your concerns and protecting your privacy rights.</p>
    </div>
  );
};

export default Privacy;
