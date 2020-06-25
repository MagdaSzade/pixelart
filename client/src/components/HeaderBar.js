import React from 'react';
import Button from './Button';

import '../styles/headerBar.css'

const HeaderBar = ({ showPopUp }) => {
    return (
        <div className='grid solid-border header-bar'>
            <div className='info-button'>
                <Button onClick={showPopUp} text="info"/>
            </div>
            <h1>
                PIXELART DLA SANDRY
            </h1>
            <div className='white-space'>
            </div>
        </div>
    );
}

export default HeaderBar;