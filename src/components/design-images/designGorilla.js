import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const designGorilla = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/design-images/g4.png" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="DesignGorilla" src={data.image.publicURL} alt="" />}
  />
);
export default designGorilla;
