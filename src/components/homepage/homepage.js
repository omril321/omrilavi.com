import * as React from 'react';
import './homepage.scss';
import PostLink from "./postLink/PostLink";


const Homepage = ({postsMetadata}) => {
    return (
        <div className="homepage_post-links-container">
            {postsMetadata.map(metadata => <PostLink key={metadata.url} {...metadata}/>)}
        </div>
    )
};

export default Homepage;