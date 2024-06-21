import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Return.module.css'; // Assuming you have a CSS module for styling

const Return = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.returnInfo}>
      <h1>RETURN POLICY</h1>
      <p>At {siteName}, we prioritize your satisfaction and aim to make your shopping experience as smooth as possible. Below are our guidelines for initiating a return:</p>
      
      <h2>1. RETURN CONDITIONS</h2>
      <p>Items must be returned in their original, unused condition, with all tags and packaging intact. Customized furniture can only be returned if it arrives defective or damaged.</p>
      
      <h2>2. RETURN PERIOD</h2>
      <p>You have 30 days from the delivery date to start a return. Please contact our customer support team promptly to begin the process.</p>
      
      <h2>3. STEPS TO RETURN</h2>
      <p><strong>Request Authorization:</strong> Email our customer support to request a return authorization code.</p>
      <p><strong>Prepare Your Package:</strong> Securely pack the furniture item in its original packaging, including all accessories and documentation. Affix the provided authorization code.</p>
      <p><strong>Ship the Item:</strong> Use a traceable mail service for return shipping. Customers are responsible for return shipping costs, except in cases where we made an error.</p>
      
      <h2>4. REFUNDS AND EXCHANGES</h2>
      <p>Once we receive and verify the condition of your returned item, we will process your refund or exchange. Refunds will be issued to the original payment method and typically take 5-7 business days to reflect. Exchanges are subject to product availability. If an item is unavailable, we may offer a replacement or refund. Please note that original shipping fees are non-refundable unless the return is due to our error.</p>
      
      <h2>5. HANDLING DAMAGED OR INCORRECT ITEMS</h2>
      <p>If you receive a damaged or incorrect furniture item, contact our customer service team immediately with photographs and details. We will cover return shipping costs for such items and provide a refund or replacement as needed.</p>
      
      <h2>6. NON-RETURNABLE ITEMS</h2>
      <p>Certain items, such as custom-made furniture or clearance items, are non-returnable. Please refer to specific product pages for details or reach out to our customer support for clarification.</p>
      
      <h2>7. RETURN POLICY EXCEPTIONS</h2>
      <p>Items purchased from third-party sellers or external platforms are not eligible for returns through {siteName}. Please review the seller’s return policy before making a purchase.</p>
      
      <p>For any further inquiries or assistance with your return, feel free to contact our support team at <a href={`mailto:support@${siteName.toLowerCase()}`}>support@{siteName}</a>. At {siteName}, we're dedicated to providing exceptional service and ensuring your satisfaction with every purchase.</p>
    </div>
  );
};

export default Return;
