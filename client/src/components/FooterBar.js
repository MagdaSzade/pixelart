import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import '../styles/styles.css';

const FooterBar = () => {
    return (
        <div className="bar-out">
            <div className='bar-in'>
                <div className="footer-wrapper">
                    <div className="footer-text">
                        Copyright © Magdalena Szade
                    </div>
                    <a href="https://github.com/MagdaSzade" target='_blank' rel="noopener noreferrer">
                        <GitHubIcon />    
                    </a>
                    <a href="https://www.linkedin.com/in/magdalena-szade/" target='_blank' rel="noopener noreferrer">
                        <LinkedInIcon />    
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FooterBar;