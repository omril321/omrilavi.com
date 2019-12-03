import React from "react";
import Homepage from "../components/Homepage/homepage";

export default ({pageContext: {allPostsMetadata}}) => {
    return (
        <Homepage postsMetadata={allPostsMetadata}/>
    )
};