import PostLink from "./PostLink";
import React from "react";

export default {title: "PostLink"};

export const YoutubeLink = () => {
    const youtubePostData = {
        "title": "Microfrontends with iFrames",
        "icon": "https://www.youtube.com/yts/img/favicon_96-vflW9Ec0w.png",
        "description": "Over the last couple of years we, at Innovid, have engaged with reusing some of our apps and embedding them in other apps. Join us as we explore the options ...",
        "image": "https://i.ytimg.com/vi/Bov9v7Oept4/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=Bov9v7Oept4",
        "provider": "YouTube",
        "type": "video.other",
        "flags": ["hebrew",]
    };

    return (
        <div style={{margin: 40, width: 400, height: 400, display: "grid"}}>
            <PostLink {...youtubePostData}/>
        </div>
    )
};

export const MediumLink = () => {
    const mediumPostData = {
        "title": "Link Previews — More than Meets the Eye",
        "icon": "https://cdn-images-1.medium.com/fit/c/76/76/1*8I-HPL0bfoIzGied-dzOvA.png",
        "description": "Ever wondered how this preview is generated?",
        "image": "https://miro.medium.com/max/1200/0*f6Vz4GodmmZIUtP6",
        "url": "https://medium.com/better-programming/link-previews-more-than-meets-the-eye-aa13c77c6d69",
        "provider": "Medium",
        "type": "article",
        "flags": []
    };
    return (
        <div style={{margin: 40, width: 400, height: 400, display: "grid"}}>
            <PostLink {...mediumPostData}/>
        </div>
    )
};
