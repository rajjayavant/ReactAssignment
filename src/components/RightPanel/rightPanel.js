import React from 'react';
import './rightPanel.css'
import './photoGrid.js'
import PhotoGrid from './photoGrid.js';

const RightPanel = ({title, text}) => {

    return(<div className='right-panel'>
        <h3>{title}</h3>
        <h3>{text}</h3>
        <PhotoGrid/>
        <div className='empty'>""</div>
    </div>)
}

export default RightPanel;