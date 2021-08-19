import * as React from 'react';
import './Homepage.scss';
import PostLink, { PostMetadata } from "./PostLink/PostLink";
import PageLayout from "../PageLayout/PageLayout";
import Header from "../Header/Header";

interface HomepageProps {
    postsMetadata: PostMetadata[];
}

const Homepage: React.FC<HomepageProps> = ({ postsMetadata }) => (
    <PageLayout>
        <Header />

        <div className="homepage_post-links-container">
            {postsMetadata.map(metadata => <PostLink key={metadata.url} {...metadata} />)}
        </div>
    </PageLayout>
);

export default Homepage;