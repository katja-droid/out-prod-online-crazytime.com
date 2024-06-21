import React from 'react';
import { useSite } from '../context/SiteContext';
import styles from './Delivery.module.css'; // Assuming you have a CSS module for styling

const Delivery = () => {
  const { siteName } = useSite();

  return (
    <div className={styles.shippingInfo}>
      <h1>SHIPPING INFORMATION</h1>
      <p>Welcome to {siteName}! We are dedicated to delivering your furniture swiftly and securely. Here’s everything you need to know about our shipping policies:</p>
      
      <h2>1. ORDER PROCESSING TIME</h2>
      <p>Once you place your order, we begin processing it right away. Processing typically takes 1 to 3 business days, depending on order volumes and product availability. We’ll keep you updated throughout the process.</p>
      
      <h2>2. SHIPPING TIMES AND METHODS</h2>
      <p>Shipping times vary based on your location and the shipping method chosen at checkout. Standard shipping typically takes 5-7 business days, while expedited options are available for faster delivery. Estimated delivery times are provided at checkout.</p>
      
      <h2>3. SHIPPING FEES</h2>
      <p>Shipping fees are calculated based on the weight and dimensions of your furniture order and your location. Free shipping is available for orders over a certain amount, as indicated on our website.</p>
      
      <h2>4. TRACKING YOUR ORDER</h2>
      <p>Once your order has shipped, we’ll send you a tracking number via email so you can monitor its progress. You can also track your order status through your account on our website.</p>
      
      <h2>5. WARRANTY POLICY</h2>
      <p>We stand by the quality of our furniture. If you encounter any defects covered by our warranty, contact our support team within the warranty period with your receipt. We’ll assess the product to determine if it qualifies for warranty coverage.</p>
      
      <h2>6. HANDLING WARRANTY CLAIMS</h2>
      <p>For valid warranty claims, we will repair or replace the product at our discretion. If the original item is unavailable, we’ll substitute it with one of equal or greater value. The original purchase's warranty period applies to all repairs or replacements.</p>
      
      <h2>7. WARRANTY EXCLUSIONS</h2>
      <p>Our warranty does not cover:</p>
      <ul>
        <li>Normal wear and tear</li>
        <li>Damage due to misuse, accidental or intentional</li>
        <li>Unauthorized modifications or repairs</li>
        <li>Failure to follow maintenance instructions</li>
        <li>External events like accidents or natural disasters</li>
      </ul>
      
      <h2>8. ORDER CONFIRMATION</h2>
      <p>Please ensure your shipping details are accurate to avoid delays. Double-check all information during checkout.</p>
      
      <h2>9. RETURN PROCESS</h2>
      <p>If your shipment is returned due to incorrect contact information or if you’re unavailable to receive it, we’ll contact you to arrange another delivery. This may involve additional fees.</p>
      
      <h2>10. SHIPPING RESTRICTIONS</h2>
      <p>Some products may have shipping restrictions based on their nature or destination. We’ll notify you of any restrictions and suggest alternatives if necessary.</p>
      
      <p>For further details or assistance, please contact our customer support at <a href={`mailto:info@${siteName.toLowerCase()}`}>info@{siteName}</a>. We’re committed to ensuring your order arrives promptly and accurately.</p>
    </div>
  );
};

export default Delivery;
