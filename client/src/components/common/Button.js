import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/button.css';

const Button = ({ onButtonClick, text }) => {
    return (
        <button className='button thin-border' onClick={onButtonClick}>{text}</button>
    )
}

Button.propTypes = {
    onButtonClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

export default Button;