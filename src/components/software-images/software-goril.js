import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const gsuite = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/software-images/softwareimage.png" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="softwareGoril" src={data.image.publicURL} alt="" />}
  />
);
export default gsuite;
