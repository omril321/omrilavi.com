import * as React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";


const MeImage = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
};

export default MeImage;