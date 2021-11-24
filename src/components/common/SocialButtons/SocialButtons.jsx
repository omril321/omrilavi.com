import * as React from 'react';
import { GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon, DevToIcon } from "../Icons";


const SBWrapper = ({ url, iconSvg, className }) => (
    <a className={`${className} w-5 h-4 p-1 m-1 box-content transition-all text-white hover:text-primary`} href={url} target="_blank" rel="noopener noreferrer">
        <div className="fill-current">
            {iconSvg}
        </div>
    </a>
);

const SocialButtons = () => (
    <>
        <SBWrapper url="https://github.com/omril321" iconSvg={<GitHubIcon />} className="border-github" />
        <SBWrapper url="https://linkedin.com/in/omri-lavi" iconSvg={<LinkedInIcon />} className="border-linkedin" />
        <SBWrapper url="https://dev.to/omril321" iconSvg={<DevToIcon />} className="border-devto" />
        <SBWrapper url="https://medium.com/@omril321" iconSvg={<MediumIcon />} className="border-medium" />
        <SBWrapper url="https://twitter.com/omril321" iconSvg={<TwitterIcon />} className="border-twitter" />
    </>
);

export default SocialButtons;