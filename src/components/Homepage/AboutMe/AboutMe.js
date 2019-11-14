import * as React from 'react';
import MeImage from "./MeImage/MeImage";
import './AboutMe.scss';


const AboutMe = () => {
    return (
        <div className="about-me">
            <div>This is a simple description of the blog. It shouldn't be too long, but that depends on my mood.</div>
            <MeImage/>
        </div>
    )
};

export default AboutMe;