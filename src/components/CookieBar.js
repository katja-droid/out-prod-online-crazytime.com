import React, { useState, useEffect } from 'react';
import styles from './CookieBar.module.css';

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
        <p>This website uses cookies. Press the button to confirm you agree to this. <a href="/privacy">Learn more</a></p>
        <button onClick={handleConfirm} className={styles.confirmButton}>Confirm</button>
      </div>
    )
  );
};

export default CookieBar;
