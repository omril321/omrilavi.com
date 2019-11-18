import * as React from 'react';
import './Homepage.scss';
import PostLink from "./PostLink/PostLink";
import AboutMe from "./AboutMe/AboutMe";
import PageLayout from "../PageLayout/PageLayout";


const Homepage = ({postsMetadata}) => (
    <PageLayout>
        <AboutMe/>
        <div className="homepage_post-links-container">
            {postsMetadata.map(metadata => <PostLink key={metadata.url} {...metadata}/>)}
        </div>
    </PageLayout>
);

export default Homepage;