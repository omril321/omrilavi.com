const { getMetadata, metadataRuleSets } = require('page-metadata-parser');
import domino from 'domino'
import nodeFetch from 'node-fetch';

const expandPostMetadata = async ({ overrides = {}, flags = [], url }: { overrides: any, flags: string[], url: string }) => {
    const { title, icon, description, image, provider, type, publishDate, ...rest } = await fetchMetadataForUrl(url);
    const result = { title, icon, description, image, url, provider, type, flags, publishDate, ...overrides };

    throwIfAnyMetadataFieldIsMissing(result);

    return result;
};

const fetchMetadataForUrl = async (url: string) => {
    const response = await nodeFetch(url);
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    const rules = {
        ...metadataRuleSets,
        ...{
            publishDate: {
                rules: [
                    ['#main-title time.date-no-year', (element: Element) => element.getAttribute('datetime')], //for dev.to
                    ['meta[itemprop="uploadDate"]', (element: Element) => element.getAttribute('content')], //for YouTube (should be before the "application/ld+json" script)
                    ['script[type="application/ld+json"]', (element: Element) => JSON.parse(element.innerHTML).datePublished], //for Medium + testim (should come before "article:published_time")
                    ['meta[property="article:published_time"]', (element: Element) => element.getAttribute('content')], //for testim.io
                    ['meta[itemprop="datePublished"]', (element: Element) => element.getAttribute('content')],
                ],
                processors: [
                    (dateOrTime: Date | string, context: any) => new Date(dateOrTime)
                ],
            },
        }
    }
    return getMetadata(doc, url, rules);
};

function throwIfAnyMetadataFieldIsMissing(obj: { url: string } & Record<string, unknown | undefined>) {
    const { url } = obj;
    for (const [key, value] of Object.entries(obj)) {
        throwIfNotExists(url, key, value);
    }
}

function throwIfNotExists(url: string, key: string, value: unknown) {
    if (!value) {
        throw new Error(`Missing value for key "${key}", for URL: ${url}`);
    }
}

export default expandPostMetadata;