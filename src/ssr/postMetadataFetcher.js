const {getMetadata} = require('page-metadata-parser');
const domino = require('domino');
const fetch = require('node-fetch');

const expandPostMetadata = async ({overrides = {}, flags = [], url}) => {
    const {title, icon, description, image, provider, type, ...rest} = await fetchMetadataForUrl(url);
    const result = {title, icon, description, image, url, provider, type, flags, ...overrides};

    throwIfAnyMetadataFieldIsMissing(result);

    return result;
};

const fetchMetadataForUrl = async (url) => {
    const response = await fetch(url);
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    return await getMetadata(doc, url);
};

function throwIfAnyMetadataFieldIsMissing(obj) {
    const {url} = obj;
    for (const [key, value] of Object.entries(obj)) {
        throwIfNotExists(url, key, value);
    }
}

function throwIfNotExists(url, key, value) {
    if (!value) {
        throw new Error(`Missing value for key "${key}", for URL: ${url}`);
    }
}

module.exports = expandPostMetadata;