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
            <div className="about-me_description-wrapper">
                <h2>Hi, I'm Omri Lavi 👋</h2>
                <PersonalLinks/>
                <p className="about-me_description-text">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default AboutMe;