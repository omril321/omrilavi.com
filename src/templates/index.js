import React from "react";
import Homepage from "../components/homepage/homepage";

export default ({pageContext: {allPostsMetadata}}) => {
    return (
        <Homepage postsMetadata={allPostsMetadata}/>
    )
};