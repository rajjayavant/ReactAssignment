import React, { useState } from 'react';
import './customerCard.css'

const Card = ({customerID, title, text, isSelected, selectCard }) => {
  const cardClassName = `card ${isSelected ? 'selected' : ''}`;
  const onClick = ()=>{
    selectCard(customerID);
  }

  return (
    <div className={cardClassName} onClick = {onClick}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
