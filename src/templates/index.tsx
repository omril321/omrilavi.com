import React from "react";
import Homepage from "../components/Homepage/Homepage";
import { PostMetadata } from '../components/Homepage/PostLink/PostLink';

interface IndexProps {
    pageContext: { allPostsMetadata: PostMetadata[] }
};

const Index: React.FC<IndexProps> = ({ pageContext: { allPostsMetadata } }) => {
    return (
        <Homepage postsMetadata={allPostsMetadata} />
    )
};

export default Index;