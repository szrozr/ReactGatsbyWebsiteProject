import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const confluence = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/hakkimizdaimages/aboutuslogo.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="aboutusLogo" src={data.image.publicURL} alt="" />}
  />
);
export default confluence;
