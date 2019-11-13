const {getMetadata} = require('page-metadata-parser');
const domino = require('domino');
const fetch = require('node-fetch');

const expandPostMetadata = async ({flags, url}) => {
    const {title, icon, description, image, provider} = await fetchMetadataForUrl(url);
    return {title, icon, description, image, url, provider, flags};
};

const fetchMetadataForUrl = async (url) => {
    const response = await fetch(url);
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    return await getMetadata(doc, url);
};

module.exports = expandPostMetadata;