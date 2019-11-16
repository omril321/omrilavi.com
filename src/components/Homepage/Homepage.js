import * as React from 'react';
import './Homepage.scss';
import PostLink from "./PostLink/PostLink";
import AboutMe from "./AboutMe/AboutMe";
import Header from "../Header/Header";


const Homepage = ({postsMetadata}) => {
    return (
        <>
            <Header/>
            <div className="homepage">
                <div className="homepage_content">
                    <AboutMe/>
                    <div className="homepage_post-links-container">
                        {postsMetadata.map(metadata => <PostLink key={metadata.url} {...metadata}/>)}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Homepage;