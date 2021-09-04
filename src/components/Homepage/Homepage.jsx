import * as React from 'react';
import PageLayout from "../PageLayout";
import Header from "../Header/Header";
import { PostLink } from './PostLink';

const Homepage = ({ postsMetadata }) => (
    <PageLayout>
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10 max-w-5xl">
            {postsMetadata.map(metadata => <PostLink key={metadata.url} {...metadata} />)}
        </div>
    </PageLayout>
);

export default Homepage;