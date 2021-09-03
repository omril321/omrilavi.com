import * as React from 'react';
import { GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon, DevToIcon } from "../Icons";
import SocialButton from "./SocialButton";


const SBWrapper = ({ url, iconSvg, blackIcon, className }) => (
    <a className={`${className} w-14 h-14 lg:hover:border-l-24 lg:hover:border-0 box-content transition-all`} href={url} target="_blank" rel="noopener noreferrer">
        <SocialButton iconSvg={iconSvg} blackIcon={blackIcon} />
    </a>
);

const SocialButtons = () => (
    <div className="flex flex-1 lg:flex-col justify-center align-start content-center overflow-visible lg:w-14 h-14 lg:h-auto">
        <SBWrapper url="https://github.com/omril321" iconSvg={<GitHubIcon />} className="bg-github border-github" />
        <SBWrapper url="https://linkedin.com/in/omri-lavi" iconSvg={<LinkedInIcon />} className="bg-linkedin border-linkedin" />
        <SBWrapper url="https://dev.to/omril321" iconSvg={<DevToIcon />} className="bg-devto border-devto" blackIcon />
        <SBWrapper url="https://medium.com/@omril321" iconSvg={<MediumIcon />} className="bg-medium border-medium" />
        <SBWrapper url="https://twitter.com/omril321" iconSvg={<TwitterIcon />} className="bg-twitter border-twitter" />
    </div>
);

export default SocialButtons;