import React from "react";
import "./PostLink.scss";

const PostLink = ({title, icon, description, image, url, provider, flags}) => {
    return (
        <a className="post-link" href={url} target={"_blank"}>
            <div className="post-link_image-container">
                <img className="post-link_image" src={image} alt={title}/>
                <img className="post-link_icon" src={icon}/>
            </div>
            <div>
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </a>
    );
}

export default PostLink;