import * as React from 'react';
import { GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon, DevToIcon } from "../../common/Icons";
import SocialButton from "./SocialButton";


const SocialButtons = () => (
    <div className="flex flex-col justify-center content-center mb-5 -ml-2 fixed left-0 top-0 bottom-0">
        <SocialButton url="https://medium.com/@omril321" iconSvg={<MediumIcon/>} bgColor='medium'/>
        <SocialButton url="https://github.com/omril321" iconSvg={<GitHubIcon/>} bgColor='github'/>
        <SocialButton url="https://twitter.com/omril321" iconSvg={<TwitterIcon/>} bgColor='twitter'/>
        <SocialButton url="https://linkedin.com/in/omri-lavi" iconSvg={<LinkedInIcon/>} bgColor='linkedin'/>
        <SocialButton url="https://dev.to/omril321" iconSvg={<DevToIcon/>} bgColor='devto' iconColor="black"/>
    </div>
);

export default SocialButtons;