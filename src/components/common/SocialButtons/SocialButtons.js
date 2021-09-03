import * as React from 'react';
import { GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon, DevToIcon } from "../Icons";
import SocialButton from "./SocialButton";


const SBWrapper = ({ bgColor, url, iconSvg, iconColor }) => (
    <a className={`bg-${bgColor} w-14 h-14 border-${bgColor} md:hover:border-l-24 md:hover:border-0 box-content transition-all`} href={url} target="_blank" rel="noopener noreferrer">
        <SocialButton iconSvg={iconSvg} iconColor={iconColor} />
    </a>
);

const SocialButtons = () => (
    <div className="flex flex-1 md:flex-col justify-center align-start content-center overflow-visible md:w-14 h-14 md:h-auto">
        <SBWrapper url="https://github.com/omril321" iconSvg={<GitHubIcon />} bgColor='github' />
        <SBWrapper url="https://linkedin.com/in/omri-lavi" iconSvg={<LinkedInIcon />} bgColor='linkedin' />
        <SBWrapper url="https://dev.to/omril321" iconSvg={<DevToIcon />} bgColor='devto' iconColor="black" />
        <SBWrapper url="https://medium.com/@omril321" iconSvg={<MediumIcon />} bgColor='medium' />
        <SBWrapper url="https://twitter.com/omril321" iconSvg={<TwitterIcon />} bgColor='twitter' />
    </div>
);

export default SocialButtons;