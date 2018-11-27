import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const LogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "puente-logo.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="LogoImage" src={data.image.publicURL} alt="Puente Logo" />}
  />
);
export default LogoImage;
