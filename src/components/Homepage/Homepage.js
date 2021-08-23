import * as React from 'react';
import PageLayout from "../PageLayout";
import Header from "../Header/Header";
import { PostLink } from './PostLink';

const Homepage = ({postsMetadata}) => (
    <PageLayout>
        <Header/>

        <div className="flex flex-col">
            {postsMetadata.map(metadata => <>
                <PostLink key={metadata.url} {...metadata}/>
            </>)}
        </div>
    </PageLayout>
);

export default Homepage;