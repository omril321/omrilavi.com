import * as React from 'react';
import MeImage from "../../common/MeImage/MeImage";
import './AboutMe.scss';
import PersonalLinks from "../../Header/PersonalLinks/PersonalLinks";
import useSiteMetadata from "../../common/useSiteMetadata";


const AboutMe = () => {
    const {description} = useSiteMetadata();

    return (
        <div className="about-me">
            <div className="about-me_image-wrapper">
                <MeImage/>
            </div>
            <div className="flex flex-col justify-between mt-7 ml-0 md:mt-0 md:ml-7 items-center text-primary md:items-start">
                <h2 className="filter drop-shadow-md">Hi, I'm Omri Lavi <span role="img" aria-label="hello">👋</span></h2>
                <PersonalLinks/>
                <p className="text-primary-dark whitespace-pre-wrap text-center md:text-left text-lg">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default AboutMe;