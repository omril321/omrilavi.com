import React from "react";
import "./PostLink.scss";
import { attemptSettingMediumImageUrlByWidth } from "../../../services/MediumImageService";

const idealImageWidth = 800; //on large screen, the image is small. On smaller screens, the image is not wider than 800px

export interface PostMetadata {
    title: string,
    icon: string,
    description: string,
    image: string,
    url: string,
    type: string,
    provider: string,
    flags: string,
    publishDate: string | Date
}

const PostLink: React.FC<PostMetadata> = ({ title, icon, description, image, url, type, provider, flags, publishDate }) => {
    const adaptedImageUrl = attemptSettingMediumImageUrlByWidth(image, idealImageWidth);
    const dateStr = new Date(publishDate).toLocaleDateString('EN', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <a className="post-link" href={url} target={"_blank"} rel="noreferrer">
            <div className="post-link_preview-image-container">
                <div className="post-link_preview-image" style={{ backgroundImage: `url(${adaptedImageUrl})` }} />
            </div>
            <div className="post-link_header">
                <h2 className="post-link_title">{title}</h2>
                <div className="post-link_date">{dateStr}</div>
            </div>
            <div className="post-link_additional-info">
                <div className="post-link_icon" style={{ backgroundImage: `url(${icon})` }} />
            </div>
            <div className="post-link_description">{description}</div>
        </a>
    );
};

export default PostLink;