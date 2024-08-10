import React from 'react';
import './photo.css'; 

const Photo = ({ url }) => {
  return (
    <div className="photo">
      <img src={url} alt="Random" />
    </div>
  );
};

export default Photo;
