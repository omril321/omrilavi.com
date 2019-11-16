import * as React from 'react';
import './HeaderLinks.scss';
import {GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon} from "../common/Icons";
import HeaderLink from "./HeaderLink";


const HeaderLinks = ({}) => (
    <div className="header-links">
        <HeaderLink url="https://medium.com/@omril321" iconSvg={<MediumIcon/>}/>
        <HeaderLink url="https://github.com/omril321" iconSvg={<GitHubIcon/>}/>
        <HeaderLink url="https://twitter.com/omril321" iconSvg={<TwitterIcon/>}/>
        <HeaderLink url="https://linkedin.com/in/omri-lavi" iconSvg={<LinkedInIcon/>}/>
    </div>
);

export default HeaderLinks;