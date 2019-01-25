import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const jirasoftware = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/hakkimizdaimages/jirasoftware.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="jirasoftware" src={data.image.publicURL} alt="Jira" />}
  />
);
export default jirasoftware;
