import React from "react";

export default ({pageContext: {postData}}) => {
    return (
        <div>Post data: {JSON.stringify(postData)}</div>
    )
};