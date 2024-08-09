// src/App.js
import React from 'react';
import LeftPanel from './components/LeftPanel/leftPanel.js';
import RightPanel from './components/RightPanel/rightPanel.js';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <LeftPanel />
      <RightPanel />
    </div>
  );
};


export default App;
