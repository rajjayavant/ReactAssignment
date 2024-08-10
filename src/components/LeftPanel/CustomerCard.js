import React from 'react';
import './customerCard.css'

const Card = ({customerID, title, text, isSelected, selectCard }) => {
  const cardClassName = `card ${isSelected ? 'selected' : ''}`;
  const onClick = ()=>{
    selectCard(customerID);
  }

  return (
    <div className={cardClassName} onClick = {onClick}>
      <h3 className='title'>{title}</h3>
      <p classname='subtext'>{text}</p>
    </div>
  );
};

export default Card;
