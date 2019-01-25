import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const gsuite = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/contactusimages/web.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="contactweb" src={data.image.publicURL} alt="" />}
  />
);
export default gsuite;
