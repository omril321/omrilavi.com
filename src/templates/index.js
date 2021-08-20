import React from "react";
import Homepage from "../components/Homepage/Homepage";

const Index = ({pageContext: {allPostsMetadata}}) => {
    return (
        <Homepage postsMetadata={allPostsMetadata}/>
    )
};

export default Index;
