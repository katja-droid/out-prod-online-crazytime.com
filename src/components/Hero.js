import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useSite } from '../context/SiteContext';
import styles from './Hero.module.css';

import image1 from '../assets/slider-image1.webp';
import image2 from '../assets/slider-image2.webp';
import image3 from '../assets/slider-image3.webp';

const Hero = () => {
  const { slogan, info } = useSite();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.slogan}>{slogan}</h1>
        <ScrollLink
          to="products-section"
          smooth={true}
          duration={500}
          offset={-70}  // Adjust the offset as needed
          className={styles.orderButton}
        >
          Order Now
        </ScrollLink>
        <p className={styles.description}>{info}</p>
        
      </div>
    </section>
  );
};

export default Hero;
