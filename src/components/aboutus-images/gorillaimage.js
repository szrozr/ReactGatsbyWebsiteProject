import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const GorillaImage = ({ clasName }) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/hakkimizdaimages/gg.png" }) {
          publicURL
        }
      }
    `}
    render={data => <img className={clasName} src={data.image.publicURL} alt="" />}
  />
);

GorillaImage.defaultProps = {
  clasName: 'AboutUsGorilla',
};

GorillaImage.propTypes = {
  clasName: PropTypes.string,
};

export default GorillaImage;
