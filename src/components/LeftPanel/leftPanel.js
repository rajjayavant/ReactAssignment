import React from 'react';
import './leftPanel.css';
import Card from './CustomerCard.js';
import data from '../../customerData.json';

const LeftPanel = ({ selectedCustomer, updatePanel }) => {
    const { customers } = data;
    const selectCard = (customerID) => {
        updatePanel(customerID, customers[customerID].title, customers[customerID].text);
    }

    const cards = Object.keys(customers).map(customerID => {
        const customer = customers[customerID];
        console.log(customerID);
        return (
            <Card
                customerID={customerID}
                title={customer.title}
                text={customer.text}
                isSelected={selectedCustomer === customerID}
                selectCard={selectCard}
            />
        );
    });


    return (
        <div className='left-panel'>
            {cards}
        </div>
    );
}

export default LeftPanel;
