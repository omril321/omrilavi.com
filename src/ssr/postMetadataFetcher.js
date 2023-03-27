const { getMetadata, metadataRuleSets } = require("page-metadata-parser")
const domino = require("domino")
const fetch = require("node-fetch")
const https = require("https")

const expandPostMetadata = async ({ overrides = {}, flags = [], url }) => {
  const {
    title,
    icon,
    description,
    image,
    provider,
    type,
    publishDate,
    ...rest
  } = await fetchMetadataForUrl(url)
  const result = {
    title,
    icon,
    description,
    image,
    url,
    provider,
    type,
    flags,
    publishDate,
    ...overrides,
  }

  throwIfAnyMetadataFieldIsMissing(result)

  return result
}

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})

const fetchMetadataForUrl = async url => {
  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    agent: httpsAgent,
  })
  const html = await response.text()
  const doc = domino.createWindow(html).document
  const rules = {
    ...metadataRuleSets,
    ...{
      publishDate: {
        rules: [
          [
            //for dev.to
            "#main-title time.date-no-year",
            element => element.getAttribute("datetime"),
          ],
          [
            //for YouTube (should be before the "application/ld+json" script)
            'meta[itemprop="uploadDate"]',
            element => element.getAttribute("content"),
          ],
          [
            //for Medium + testim (should come before "article:published_time")
            'script[type="application/ld+json"]',
            element => JSON.parse(element.innerHTML).datePublished,
          ],
          [
            //for testim.io
            'meta[property="article:published_time"]',
            element => element.getAttribute("content"),
          ],
          [
            'meta[itemprop="datePublished"]',
            element => element.getAttribute("content"),
          ],
        ],
        processors: [(dateOrTime, context) => new Date(dateOrTime)],
      },
    },
  }
  return getMetadata(doc, url, rules)
}

function throwIfAnyMetadataFieldIsMissing(obj) {
  const { url } = obj
  for (const [key, value] of Object.entries(obj)) {
    throwIfNotExists(url, key, value)
  }
}

function throwIfNotExists(url, key, value) {
  if (!value) {
    throw new Error(`Missing value for key "${key}", for URL: ${url}`)
  }
}

module.exports = expandPostMetadata
