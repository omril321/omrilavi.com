import * as React from 'react';

const SocialButton = ({iconSvg, blackIcon = false}) => {
    const text = blackIcon ? 'text-black' : 'text-white';
    return (
        <div className={`m-2 ${text} fill-current`}>
            {iconSvg}
        </div>
    );
};

export default SocialButton;