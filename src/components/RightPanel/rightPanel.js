import React from 'react';
import './rightPanel.css'

const RightPanel = ({title, text}) => {

    return(<div className='right-panel'>
        <h2>Right Panel Content</h2>
        <h3>{title}</h3>
        <h3>{text}</h3>
    </div>)
}

export default RightPanel;