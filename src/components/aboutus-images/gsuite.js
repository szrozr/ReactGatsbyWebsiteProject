import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const gsuite = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/hakkimizdaimages/gsuite.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="gsuite" src={data.image.publicURL} alt="Gsuite" />}
  />
);
export default gsuite;
