import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import '../../styles/footer.css';

const FooterBar = () => {
    return (
        <div className="footer solid-border">
            <div className="flex">
                <div className="footer-text">
                    Copyright © Magdalena Szade
                </div>
                <a href="https://github.com/MagdaSzade" target='_blank' rel="noopener noreferrer">
                    <GitHubIcon style={{fontSize: '1rem'}}/>    
                </a>
                <a href="https://www.linkedin.com/in/magdalena-szade/" target='_blank' rel="noopener noreferrer">
                    <LinkedInIcon style={{fontSize: '1rem'}}/>    
                </a>
            </div>
        </div>
    );
}

export default FooterBar;