const postsData = require('./src/config/posts');
const {getMetadata} = require('page-metadata-parser');
const domino = require('domino');
const fetch = require('node-fetch');
const slugify = require("./src/ssr/slugify");

exports.createPages = async ({actions}) => {
    const {createPage} = actions;
    const pagesMetadata = postsData.posts.map(post => expandPostMetadata(post));
    const allMetadata = await Promise.all(pagesMetadata);

    allMetadata.forEach((postMetadata, index) => createPage({
        path: generatePathForPostTitle(postMetadata.title),
        component: require.resolve("./src/templates/post.jsx"),
        context: {postMetadata}
    }))
};

const expandPostMetadata = async (post) => {
    const {title, icon, description, image, url, provider} = await fetchMetadataForUrl(post.url);
    return {title, icon, description, image, url, provider, flags: post.flags};
};

const fetchMetadataForUrl = async (url) => {
    const response = await fetch(url);
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    return await getMetadata(doc, url);
};

const generatePathForPostTitle = (title) => `/${slugify(title)}`;