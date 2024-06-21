import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module for styling
import SubscriptionForm from './SubscriptionForm'; // Import the SubscriptionForm component
import { useSite } from '../context/SiteContext';
import socials from '../data/socialsData'; // Import the socials array
import { Link } from 'react-router-dom';

const Footer = () => {
  const { siteName } = useSite();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <SubscriptionForm /> {/* Add the SubscriptionForm component here */}
      </div>
      <div className={styles.linksSection}>
        <div className={styles.linksColumn}>
          <Link to="/return" className={styles.footerLink}>Return Policy</Link>
          <Link to="/delivery" className={styles.footerLink}>Delivery Policy</Link>
        </div>
        <div className={styles.linksColumn}>
          <Link to="/terms" className={styles.footerLink}>Terms and Conditions</Link>
          <Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link>
        </div>
      </div>
      <div className={styles.socialSection}>
        {socials.map(social => (
          <a key={social.id} href={social.link} className={styles.socialIcon}>
            <img src={social.image} alt={`Social icon ${social.id}`} />
          </a>
        ))}
      </div>
      <div className={styles.footerCopyright}>
        {siteName} &copy; <br/> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
