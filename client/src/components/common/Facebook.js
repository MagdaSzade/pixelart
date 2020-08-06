import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { BaseURLFacebook } from '../../api/database';

const Facebook = (props) => {
    return (
        <div className="facebook">
            <FacebookShareButton 
                url={`${BaseURLFacebook}/${props.id}`} 
                quote="Narysuj coś i wesprzyj walkę Sandry z SMA" 
                hashtag="#LicytacjeDlaSandryWolniak">
                <FacebookIcon size="20" round='true'/>
            </FacebookShareButton>
        </div>
    )
}

export default Facebook;