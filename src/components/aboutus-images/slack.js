import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const slack = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/hakkimizdaimages/slack.svg" }) {
          publicURL
        }
      }
    `}
    render={data => <img id="Slack" src={data.image.publicURL} alt="Slack" />}
  />
);
export default slack;
