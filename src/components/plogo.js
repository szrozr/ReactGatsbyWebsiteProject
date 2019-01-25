import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';


const LogoImage = ({ clasName }) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/puente-Plogo.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img className={clasName} src={data.image.publicURL} alt="Puente Logo" />}
  />
);

LogoImage.defaultProps = {
  clasName: 'LogoImage',
};

LogoImage.propTypes = {
  clasName: PropTypes.string,
};

export default LogoImage;
