import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const confluence = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/hakkimizdaimages/confluence.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="confluence" src={data.image.publicURL} alt="Confluence" />}
  />
);
export default confluence;
