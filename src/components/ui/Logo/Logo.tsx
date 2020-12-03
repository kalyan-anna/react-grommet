import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Logo = (props: any) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 25, width: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>;
  }

  return <Img {...props} fixed={data.placeholderImage.childImageSharp.fixed} />;
};
