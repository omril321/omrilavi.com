import * as React from 'react';
import MeImage from "../common/MeImage";
import useSiteMetadata from "../common/useSiteMetadata";
import SocialButtons from '../common/SocialButtons/SocialButtons';

const AboutMe = () => {
    const {description} = useSiteMetadata();

    return (
        <div className="flex m-auto items-center justify-center">
            <div className="flex-shrink-0 rounded-full hidden sm:block w-32 overflow-hidden filter drop-shadow-2xl">
                <MeImage/>
            </div>
            <div className="sm:ml-8">
                <h2 className="text-primary-light filter drop-shadow-md">Hi, I'm Omri Lavi <span role="img" aria-label="hello">👋</span></h2>
                <p className="text-secondary-light whitespace-pre-wrap text-lg font-semibold">
                    {description}
                </p>
                <div className="flex flex-1 justify-center mb-4 sm:justify-start sm:mb-0">
                    <SocialButtons/>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;