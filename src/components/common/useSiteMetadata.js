import {graphql, useStaticQuery} from "gatsby";

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            image
          }
        }
      }
    `
    );

    return site.siteMetadata;
};

export default useSiteMetadata;