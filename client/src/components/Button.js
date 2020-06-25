import React from 'react';

import '../styles/button.css';

const Button = (props) => {
    return (
        <button className='button thin-border' onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;