import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const gsuite = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/design-images/designlogo.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="designLogo" src={data.image.publicURL} alt="" />}
  />
);
export default gsuite;
