import React from 'react';
import RoundedImageSlider from "./Categ";

const Categ = () => {
  const images = [
    'https://images.pexels.com/photos/4866041/pexels-photo-4866041.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3021329/pexels-photo-3021329.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2623828/pexels-photo-2623828.jpeg?auto=compress&cs=tinysrgb&w=600',
    // Add more image URLs
  ];

  return (
    <div className="app">
          <RoundedImageSlider images={images} />
        
    </div>
  );
};

export default Categ;
