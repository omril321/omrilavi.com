import React from "react";
import { PostMetadata } from '../components/Homepage/PostLink/PostLink';

interface PostProps {
    pageContext: { postMetadata: PostMetadata[] }
};

const Post: React.FC<PostProps> = ({ pageContext: { postMetadata } }) => {
    return (
        <div>Post data: {JSON.stringify(postMetadata)}</div>
    )
};
export default Post;
