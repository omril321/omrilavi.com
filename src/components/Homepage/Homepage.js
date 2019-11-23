import * as React from 'react';
import './Homepage.scss';
import PostLink from "./PostLink/PostLink";
import PageLayout from "../PageLayout/PageLayout";
import Header from "../Header/Header";

const Homepage = ({postsMetadata}) => (
    <PageLayout>
        <Header/>

        <div className="homepage_post-links-container">
            {postsMetadata.map(metadata => <PostLink key={metadata.url} {...metadata}/>)}
        </div>
    </PageLayout>
);

export default Homepage;