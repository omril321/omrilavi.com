const { getMetadata, metadataRuleSets } = require('page-metadata-parser');
const domino = require('domino');
const fetch = require('node-fetch');

const expandPostMetadata = async ({ overrides = {}, flags = [], url }) => {
    const { title, icon, description, image, provider, type, publishDate, ...rest } = await fetchMetadataForUrl(url);
    const result = { title, icon, description, image, url, provider, type, flags, publishDate, ...overrides };

    throwIfAnyMetadataFieldIsMissing(result);

    return result;
};

const fetchMetadataForUrl = async (url) => {
    const response = await fetch(url);
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    const rules = {
        ...metadataRuleSets,
        ...{
            publishDate: {
                rules: [
                    ['#main-title time.date-no-year', element => element.getAttribute('datetime')], //for dev.to
                    ['meta[itemprop="uploadDate"]', element => element.getAttribute('content')], //for YouTube (should be before the "application/ld+json" script)
                    ['script[type="application/ld+json"]', element => JSON.parse(element.innerHTML).datePublished], //for Medium + testim (should come before "article:published_time")
                    ['meta[property="article:published_time"]', element => element.getAttribute('content')], //for testim.io
                    ['meta[itemprop="datePublished"]', element => element.getAttribute('content')],
                ],
                processors: [
                    (dateOrTime, context) => new Date(dateOrTime)
                ],
            },
        }
    }
    return getMetadata(doc, url, rules);
};

function throwIfAnyMetadataFieldIsMissing(obj) {
    const { url } = obj;
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