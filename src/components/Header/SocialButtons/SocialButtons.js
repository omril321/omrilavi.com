import * as React from 'react';
import {GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon} from "../../common/Icons";
import SocialButton from "./SocialButton";


const SocialButtons = () => (
    <div className="flex content-center mb-5 -ml-2">
        <SocialButton url="https://medium.com/@omril321" iconSvg={<MediumIcon/>}/>
        <SocialButton url="https://github.com/omril321" iconSvg={<GitHubIcon/>}/>
        <SocialButton url="https://twitter.com/omril321" iconSvg={<TwitterIcon/>}/>
        <SocialButton url="https://linkedin.com/in/omri-lavi" iconSvg={<LinkedInIcon/>}/>
    </div>
);

export default SocialButtons;