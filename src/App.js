import React, {useState} from 'react';
import LeftPanel from './components/LeftPanel/leftPanel.js';
import RightPanel from './components/RightPanel/rightPanel.js';
import './App.css'

const App = () => {
  const [customerData, setCustomerData] = useState({
    selectedCustomer: 'customerJohnDoe',
    customerTitle: 'placeholder',
    customerText: 'plaedholderewfw',
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

