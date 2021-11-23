import * as React from 'react';
import PageLayout from "../PageLayout";
import Header from "../Header/Header";
import { PostLink } from './PostLink';

const Homepage = ({ postsMetadata }) => (
    <PageLayout>
        <Header />

        <div className="grid grid-cols-1 max-w-6xl sm:grid-cols-2 md:grid-cols-3">
            {postsMetadata.map(metadata => <PostLink key={metadata.url} {...metadata} />)}
        </div>
    </PageLayout>
);

export default Homepage;