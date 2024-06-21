import React, { useState, useEffect } from 'react';
import styles from './CookieBar.module.css';
import { Link } from 'react-scroll';

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies) {
      setIsVisible(false);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={styles.cookieBar}>
        <p>This website uses cookies. Press the button to confirm you agree to this. <Link to="/privacy">Learn more</Link></p>
        <button onClick={handleConfirm} className={styles.confirmButton}>Confirm</button>
      </div>
    )
  );
};

export default CookieBar;
