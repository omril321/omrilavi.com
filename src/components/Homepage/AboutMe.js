import * as React from 'react';
import MeImage from "../common/MeImage";
import SocialButtons from "../Header/SocialButtons/SocialButtons";
import useSiteMetadata from "../common/useSiteMetadata";


const AboutMe = () => {
    const {description} = useSiteMetadata();

    return (
        <div className="flex flex-col items-center justify-center mb-3 md:mt-10 md:flex-row md:items-start">
            <div className="flex-shrink-0 rounded-full w-32 overflow-hidden filter drop-shadow-2xl">
                <MeImage/>
            </div>
            <div className="flex flex-col justify-between mt-7 ml-0 md:mt-0 md:ml-7 items-center text-primary-xlight md:items-start">
                <h2 className="filter drop-shadow-md">Hi, I'm Omri Lavi <span role="img" aria-label="hello">👋</span></h2>
                <SocialButtons/>
                <p className="text-secondary-xlight whitespace-pre-wrap text-center md:text-left text-lg font-semibold">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default AboutMe;