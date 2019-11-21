import Homepage from "./Homepage";
import React from "react";

export default {title: "Homepage"};

const postsMetadata = [
    {
        "title": "Microfrontends with iFrames",
        "icon": "https://www.youtube.com/yts/img/favicon_96-vflW9Ec0w.png",
        "description": "Over the last couple of years we, at Innovid, have engaged with reusing some of our apps and embedding them in other apps. Join us as we explore the options ...",
        "image": "https://i.ytimg.com/vi/Bov9v7Oept4/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=Bov9v7Oept4",
        "provider": "YouTube",
        "type": "video.other",
        "flags": [
            "hebrew"
        ]
    },
    {
        "title": "Fixing Overly Aggressive Optimization with Terser",
        "icon": "https://cdn-images-1.medium.com/fit/c/76/76/1*8I-HPL0bfoIzGied-dzOvA.png",
        "description": "Importing a legitimate library has recently broken our production bundle, by introducing a “Syntax Error” exception. This short article…",
        "image": "https://miro.medium.com/max/960/0*i_3GXfPLKlfDKwhY",
        "url": "https://medium.com/@omril321/fixing-overly-aggressive-optimization-with-terser-f07309761b50",
        "provider": "Medium",
        "type": "article",
        "flags": []
    },
    {
        "title": "7 Things You Should Know Before Starting with Side Projects",
        "icon": "https://cdn-images-1.medium.com/fit/c/76/76/1*8I-HPL0bfoIzGied-dzOvA.png",
        "description": "Recently, I discontinued my work on a side project I’ve started 18 months ago.\nDoesn’t sound like a big success story, right? I thought so…",
        "image": "https://miro.medium.com/max/1200/0*6ht9ccoPSRX8SudN",
        "url": "https://medium.com/@omril321/7-things-you-should-know-before-starting-with-side-projects-42dc1ddc1c37",
        "provider": "Medium",
        "type": "article",
        "flags": []
    },
    {
        "title": "Cleaner TypeScript With the Non-Null Assertion Operator",
        "icon": "https://cdn-images-1.medium.com/fit/c/76/76/1*8I-HPL0bfoIzGied-dzOvA.png",
        "description": "Reduce your cognitive load and make your code less verbose",
        "image": "https://miro.medium.com/max/1200/1*tPnsbYsfRrcPaDtsMX3ARQ.jpeg",
        "url": "https://medium.com/better-programming/cleaner-typescript-with-the-non-null-assertion-operator-300789388376",
        "provider": "Medium",
        "type": "article",
        "flags": []
    },
    {
        "title": "Link Previews — More than Meets the Eye",
        "icon": "https://cdn-images-1.medium.com/fit/c/76/76/1*8I-HPL0bfoIzGied-dzOvA.png",
        "description": "Ever wondered how this preview is generated?",
        "image": "https://miro.medium.com/max/1200/0*f6Vz4GodmmZIUtP6",
        "url": "https://medium.com/better-programming/link-previews-more-than-meets-the-eye-aa13c77c6d69",
        "provider": "Medium",
        "type": "article",
        "flags": []
    }
];

export const withPostsData = () => <Homepage postsMetadata={postsMetadata}/>;