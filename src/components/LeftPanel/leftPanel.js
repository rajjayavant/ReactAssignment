import React from 'react';
import './leftPanel.css';
import Card from './CustomerCard.js';
import data from '../../customerData.json'; // Import the JSON data

const LeftPanel = () => {
  const {customers}  = data;
  const cards = Object.keys(customers).map(key => {
    const customer = customers[key];
    return <Card key={key} title={customer.title} text={customer.text} />;
  });

  return (
    <div className='left-panel'>
      {cards}
    </div>
  );
}

export default LeftPanel;
