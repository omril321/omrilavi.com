import * as React from 'react';
import {GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon} from "../../common/Icons";
import PersonalLink from "./PersonalLink";


const PersonalLinks = () => (
    <div className="flex content-center mb-5 -ml-2">
        <PersonalLink url="https://medium.com/@omril321" iconSvg={<MediumIcon/>}/>
        <PersonalLink url="https://github.com/omril321" iconSvg={<GitHubIcon/>}/>
        <PersonalLink url="https://twitter.com/omril321" iconSvg={<TwitterIcon/>}/>
        <PersonalLink url="https://linkedin.com/in/omri-lavi" iconSvg={<LinkedInIcon/>}/>
    </div>
);

export default PersonalLinks;