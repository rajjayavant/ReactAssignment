// src/components/Photo.js
import React from 'react';
import './photo.css'; // Optional: for custom styling

const Photo = ({ url }) => {
  return (
    <div className="photo">
      <img src={url} alt="Random" />
    </div>
  );
};

export default Photo;
