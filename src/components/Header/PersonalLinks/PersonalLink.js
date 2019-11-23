import * as React from 'react';
import './PersonalLink.scss';


const PersonalLink = ({url, iconSvg}) => (
    <a className="personal-link" href={url} target="_blank" rel="noopener noreferrer">
        <div className="personal-link_icon-wrapper">
            {iconSvg}
        </div>
    </a>
);

export default PersonalLink;