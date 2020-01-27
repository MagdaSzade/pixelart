import React from 'react';

import '../../styles/styles.css';

const Button = (props) => {
    return (
        <button className='header-button' data-id={props.data}>{props.text}</button>
    )
}

export default Button;