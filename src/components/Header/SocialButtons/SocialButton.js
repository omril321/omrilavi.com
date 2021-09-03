import * as React from 'react';

const SocialButton = ({iconSvg, iconColor = 'white'}) => (
    <div className={`m-2 text-${iconColor} fill-current`}>
        {iconSvg}
    </div>
);

export default SocialButton;