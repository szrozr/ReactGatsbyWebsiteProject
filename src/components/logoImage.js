import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const LogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/puente-logo-2.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="LogoImage" src={data.image.publicURL} alt="Puente Logo" />}
  />
);
export default LogoImage;
