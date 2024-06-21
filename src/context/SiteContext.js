import React, { createContext, useContext } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const siteInfo = {
    siteName: "Online-Crazytime.com",
    slogan: "Transforming Spaces, Enriching Lives",
    info: "Welcome to Online-Crazytime.com, your premier destination for stylish, high-quality, and affordable furniture. Our mission is to help you create beautiful, comfortable, and functional living spaces that reflect your unique taste and lifestyle. From contemporary designs to classic styles, we offer a wide range of furniture to meet all your needs, ensuring every room in your home is both stunning and practical.",
    thankYouProduct: "Thank you for showing interest in our product. We're excited to assist you in finding the perfect piece to enhance your space and add a touch of elegance to your home. Should you have any questions, our dedicated team is here to help.",
    thankYouSubscription: "Thank you for subscribing to Online-Crazytime.com! We're delighted to have you join our community. Get ready to receive the latest updates, exclusive deals, and expert tips on creating a beautiful and functional living space.",
    thankYouOrder: "Thank you for placing an order with Online-Crazytime.com. We appreciate your trust and are committed to delivering your furniture safely and promptly. We can't wait for you to enjoy your new addition to your home."
  };

  return (
    <SiteContext.Provider value={siteInfo}>
      {children}
    </SiteContext.Provider>
  );
};

// Create a custom hook to use the SiteContext
export const useSite = () => {
  return useContext(SiteContext);
};
