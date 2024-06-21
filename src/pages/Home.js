import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/productsData';
import styles from './Home.module.css';
import Hero from '../components/Hero';

const Home = () => {
  // Define the groups with names
  const groupedProducts = [
    { groupName: '-20% Crazy Sale', products: products.slice(0, 3) },
    { groupName: 'New Arrival', products: products.slice(3, 6) },
    { groupName: 'Exclusive New Collection', products: products.slice(6, 9) },
    // Add more groups as needed
  ];

  return (
    <>
      <Hero />
      <div id="products-section" className={styles.container}>
        <h1 className={styles.heading}>Products</h1>
        {groupedProducts.map((group, index) => (
          <div key={index} className={styles.group}>
            <h2 className={styles.groupHeading}>{group.groupName}</h2>
            <div className={styles.grid}>
              {group.products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
