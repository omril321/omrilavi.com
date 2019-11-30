import * as React from 'react';
import MeImage from "../../common/MeImage/MeImage";
import './AboutMe.scss';
import PersonalLinks from "../../Header/PersonalLinks/PersonalLinks";


const AboutMe = () => (
    <div className="about-me">
        <div className="about-me_image-wrapper">
            <MeImage/>
        </div>
        <div className="about-me_description-wrapper">
            <h2>Hi, I'm Omri Lavi 👋</h2>
            <PersonalLinks/>
            <p className="about-me_description-text">
                A fullstack developer that loves frontend, testing and code quality.
                I enjoy learning new things, and sometimes write about them. You can find some of my content below.
            </p>
        </div>

    </div>
);

export default AboutMe;