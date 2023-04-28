//@ts-expect-error
import { getMetadata, metadataRuleSets } from "page-metadata-parser";
import domino from "domino";
import axios from "axios";
import https from "https";
import crypto from "crypto";

type PostMetadata = {
  url: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  provider: string;
  type: string;
  publishDate: string;
};

export const expandPostMetadata = async ({
  overrides = {},
  url,
}: {
  overrides?: Partial<PostMetadata>;
  url: string;
}): Promise<PostMetadata> => {
  const { title, icon, description, image, provider, type, publishDate } = await fetchMetadataForUrl(url);
  const result = {
    title,
    icon,
    description,
    image,
    url,
    provider,
    type,
    publishDate,
    ...overrides,
  };

  throwIfAnyMetadataFieldIsMissing(result);

  return result;
};

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
});

const fetchMetadataForUrl = async (url: string) => {
  const response = await axios(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    httpsAgent,
  });
  const html = response.data;
  const doc = domino.createWindow(html).document;
  const rules = {
    ...metadataRuleSets,
    ...{
      publishDate: {
        rules: [
          [
            //for dev.to
            "#main-title time.date-no-year",
            (element: HTMLElement) => element.getAttribute("datetime"),
          ],
          [
            //for YouTube (should be before the "application/ld+json" script)
            'meta[itemprop="uploadDate"]',
            (element: HTMLElement) => element.getAttribute("content"),
          ],
          [
            //for Medium + testim (should come before "article:published_time")
            'script[type="application/ld+json"]',
            (element: HTMLElement) => JSON.parse(element.innerHTML).datePublished,
          ],
          [
            //for testim.io
            'meta[property="article:published_time"]',
            (element: HTMLElement) => element.getAttribute("content"),
          ],
          ['meta[itemprop="datePublished"]', (element: HTMLElement) => element.getAttribute("content")],
        ],
        processors: [(dateOrTime: Date | string) => new Date(dateOrTime)],
      },
    },
  };
  return getMetadata(doc, url, rules);
};

function throwIfAnyMetadataFieldIsMissing(obj: { url: string } & {}) {
  const { url } = obj;
  for (const [key, value] of Object.entries(obj)) {
    throwIfNotExists(url, key, value);
  }
}

function throwIfNotExists(url: string, key: string, value: any) {
  if (!value) {
    throw new Error(`Missing value for key "${key}", for URL: ${url}`);
  }
}
