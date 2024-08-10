import React, {useState} from 'react';
import LeftPanel from './components/LeftPanel/leftPanel.js';
import RightPanel from './components/RightPanel/rightPanel.js';
import './App.css'
import data from'./customerData.json'

const App = () => {
  const { customers } = data;
  const firstCustomer = customers[Object.keys(customers)[0]];
  const [customerData, setCustomerData] = useState({
    selectedCustomer: Object.keys(customers)[0],
    customerTitle: firstCustomer.title,
    customerText: firstCustomer.text,
  });

  const updatePanel = (customerID, customerTitle, customerText) => {
    setCustomerData({
      selectedCustomer: customerID,
      customerTitle: customerTitle,
      customerText: customerText,
    });
  };

  return (
    <div className='container'>
      <LeftPanel selectedCustomer={customerData.selectedCustomer} updatePanel={updatePanel} />
      <RightPanel title={customerData.customerTitle} text={customerData.customerText} />
    </div>
  );
};

export default App;

