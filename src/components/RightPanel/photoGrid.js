// src/components/PhotoGrid.js
import React, { useState, useEffect } from 'react';
import Photo from './photo.js';
import './photoGrid.css';

const PhotoGrid = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const requests = Array.from({ length: 9 }, () => fetch('https://picsum.photos/300?grayscale'));

      try {
        const responses = await Promise.all(requests);
        const urls = responses.map(response => response.url);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
    const intervalId = setInterval(fetchImages, 10000); 

    return () => clearInterval(intervalId); 
  },[]);

  return (
    <div className="photo-grid">
      {imageUrls.map((url, index) => (
        <Photo key={index} url={url} />
      ))}
      <div></div>
    </div>
  );
};

export default PhotoGrid;
