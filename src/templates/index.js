import React from "react";
import Homepage from "../components/Homepage/Homepage";

export default ({pageContext: {allPostsMetadata}}) => {
    return (
        <Homepage postsMetadata={allPostsMetadata}/>
    )
};