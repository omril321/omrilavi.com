/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import useSiteMetadata from "./common/useSiteMetadata";

function SEO({ description, lang, meta, title }) {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const imageUrl = `${siteMetadata.url}${siteMetadata.image}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${siteMetadata.title}`}
      titleTemplate={`${siteMetadata.title}`} //in the future, use a template if the title should change
      meta={[
        {
          property: `title`,
          content: siteMetadata.title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `image`,
          content: imageUrl,
        },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:url`,
          content: `${siteMetadata.url}/`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imageUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: imageUrl,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ''
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO
