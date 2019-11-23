import * as React from 'react';
import MeImage from "../../common/MeImage/MeImage";
import './AboutMe.scss';
import PersonalLinks from "../../Header/PersonalLinks/PersonalLinks";


const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me_image-wrapper">
                <MeImage/>
            </div>
            <div className="about-me_description-wrapper">
                <span>Hi</span>
                This is a simple description of the blog. It shouldn't be too long, but that depends on my mood.

                <PersonalLinks/>
            </div>

        </div>
    )
};

export default AboutMe;