import React from 'react';
import './rightPanel.css'
import './photoGrid.js'
import PhotoGrid from './photoGrid.js';
import GridLoader from "react-spinners/ClipLoader";

const RightPanel = ({title, text}) => {

    return(<div className='right-panel'>
        <b classname = 'title'>{title}</b>
        <p className='subtext'>{text}</p>
        <PhotoGrid/>
        <GridLoader></GridLoader>
    </div>)
}

export default RightPanel;