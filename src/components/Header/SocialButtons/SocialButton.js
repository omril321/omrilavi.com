import * as React from 'react';

const SocialButton = ({url, iconSvg}) => (
    <a className="p-1 hover:text-primary hover:fill-current " href={url} target="_blank" rel="noopener noreferrer">
        <div className="w-8 h-8 transition-all">
            {iconSvg}
        </div>
    </a>
);

export default SocialButton;