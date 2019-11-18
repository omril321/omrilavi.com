import * as React from 'react';
import './HeaderLink.scss';


const HeaderLink = ({url, iconSvg}) => (
    <a className="header-link" href={url} target="_blank" rel="noopener noreferrer">
        <div className="header-link_icon-wrapper">
            {iconSvg}
        </div>
    </a>
);

export default HeaderLink;