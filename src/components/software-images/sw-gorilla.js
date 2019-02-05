import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SwGorilla = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/software-images/g3.png" }) {
          publicURL
        }
      }
    `}
    render={data => <img className="softwareLogo" src={data.image.publicURL} alt="" />}
  />
);
export default SwGorilla;
