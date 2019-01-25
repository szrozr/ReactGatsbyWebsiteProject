import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const GorillaImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/puenteanimation.gif" }) {
          publicURL
        }
      }
    `}
    render={data => <img src={data.image.publicURL} alt="Puente Logo" />}
  />
);

export default GorillaImage;
