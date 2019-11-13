import * as React from 'react';
import './homepage.scss';


const Homepage = ({postsMetadata}) => {
    return (
        <div>Post data: {JSON.stringify(postsMetadata)}</div>
    )
};

export default Homepage;