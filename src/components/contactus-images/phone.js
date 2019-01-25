import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const gsuite = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/contactusimages/phone.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="contactphone" src={data.image.publicURL} alt="" />}
  />
);
export default gsuite;
