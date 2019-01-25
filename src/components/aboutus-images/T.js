import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const T = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/hakkimizdaimages/T.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="T" src={data.image.publicURL} alt="T" />}
  />
);
export default T;
