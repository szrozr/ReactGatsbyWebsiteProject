import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const gsuite = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/software-images/software-logo.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="softwareLogo" src={data.image.publicURL} alt="" />}
  />
);
export default gsuite;
