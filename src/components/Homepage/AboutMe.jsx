import * as React from 'react';
import MeImage from "../common/MeImage";
import useSiteMetadata from "../common/useSiteMetadata";


const AboutMe = () => {
    const {description} = useSiteMetadata();

    return (
        <div className="flex m-auto items-center justify-center px-8 py-4 sm:py-10 lg:pb-16 max-w-3xl">
            <div className="flex-shrink-0 rounded-full hidden sm:block w-32 overflow-hidden filter drop-shadow-2xl">
                <MeImage/>
            </div>
            <div className="sm:ml-8">
                <h2 className="text-primary-xlight filter drop-shadow-md">Hi, I'm Omri Lavi <span role="img" aria-label="hello">👋</span></h2>
                <p className="text-secondary-xlight whitespace-pre-wrap text-lg font-semibold">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default AboutMe;