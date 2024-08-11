import React from 'react';
import './customerCard.css';

const Card = ({ customerID, title, text, isSelected, selectCard }) => {
  const cardClassName = `card ${isSelected ? 'selected' : ''}`;
  const onClick = () => {
    selectCard(customerID);
  };

  return (
    <div className={cardClassName} onClick={onClick}>
      <h3 className='title'>{title}</h3>
      <p className='subtext'>{text}</p>
      <div>{console.log('card')}</div>
    </div>
  );
};

export default React.memo(Card, (prevProps, nextProps) => {
  return prevProps.isSelected === nextProps.isSelected;
});
