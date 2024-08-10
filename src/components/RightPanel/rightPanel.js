import React from 'react';
import './rightPanel.css'
import './photoGrid.js'
import PhotoGrid from './photoGrid.js';

const RightPanel = ({title, text}) => {

    return(<div className='right-panel'>
        <b classname = 'title'>{title}</b>
        <p className='subtext'>{text}</p>
        <PhotoGrid/>
        <div className='empty'>""</div>
    </div>)
}

export default RightPanel;