import React from "react";
import "./PostLink.scss";

const PostLink = ({title, icon, description, image, url, type, provider, flags}) => {
    return (
        <a className="post-link" href={url} target={"_blank"}>
            <div className="post-link_image-container">
                <div className="post-link_image" style={{backgroundImage: `url(${image})`}}/>
                <div className="post-link_icon" style={{backgroundImage: `url(${icon})`}}/>
            </div>
            <div>
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </a>
    );
}

export default PostLink;