import React from "react";

export default ({pageContext: {postMetadata}}) => {
    return (
        <div>Post data: {JSON.stringify(postMetadata)}</div>
    )
};