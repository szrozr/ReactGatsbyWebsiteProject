import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const gsuite = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/design-images/designgorilla.png" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="DesignGorilla" src={data.image.publicURL} alt="" />}
  />
);
export default gsuite;
