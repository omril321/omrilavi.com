import * as React from 'react';
import './Homepage.scss';
import PostLink from "./PostLink/PostLink";
import AboutMe from "./AboutMe/AboutMe";


const Homepage = ({postsMetadata}) => {
    return (
        <div className="homepage">
            <div className="homepage_padding"/>
            <div className="homepage_content">
                <AboutMe/>
                <div className="homepage_post-links-container">
                    {postsMetadata.map(metadata => <PostLink key={metadata.url} {...metadata}/>)}
                </div>
            </div>
            <div className="homepage_padding"/>
        </div>
    )
};

export default Homepage;