import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const softwareGorilla = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/gorilla-images/technologyMascot.png" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="SoftwareGorilla" src={data.image.publicURL} alt="" />}
  />
);
export default softwareGorilla;
