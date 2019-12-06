import React from "react";
import "./PostLink.scss";
import {attemptSettingMediumImageUrlByWidth} from "../../../services/MediumImageService";

const idealImageWidth = 800; //on large screen, the image is small. On smaller screens, the image is not wider than 800px

const PostLink = ({title, icon, description, image, url, type, provider, flags}) => {
    const adaptedImageUrl = attemptSettingMediumImageUrlByWidth(image, idealImageWidth);

    return (
        <a className="post-link" href={url} target={"_blank"}>
            <div className="post-link_preview-image-container">
                <div className="post-link_preview-image" style={{backgroundImage: `url(${adaptedImageUrl})`}}/>
            </div>
            <h2 className="post-link_title">{title}</h2>
            <div className="post-link_additional-info">
                <div className="post-link_icon" style={{backgroundImage: `url(${icon})`}}/>
                {/*<div>Reading time</div>*/}
                {/*<div>Type {type}</div>*/}
            </div>
            <div className="post-link_description">{description}</div>
        </a>
    );
};

export default PostLink;