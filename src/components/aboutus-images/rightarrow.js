import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const rightarrow = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/hakkimizdaimages/rightarrow.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="rightarrow" src={data.image.publicURL} alt="rightarrow" />}
  />
);
export default rightarrow;
