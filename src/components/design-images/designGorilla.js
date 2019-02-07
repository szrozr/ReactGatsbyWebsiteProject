import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const designGorilla = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/gorilla-images/designMascot.png" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="DesignGorilla" src={data.image.publicURL} alt="" />}
  />
);
export default designGorilla;
