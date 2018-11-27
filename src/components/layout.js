import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';

import appleTouchIcon from '../images/favicon/apple-touch-icon.png';
import favicon32 from '../images/favicon/favicon-32x32.png';
import favicon16 from '../images/favicon/favicon-16x16.png';
// import manifest from '../images/favicon/site.webmanifest';
import maskIcon from '../images/favicon/safari-pinned-tab.svg';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        manifest: file(relativePath: { eq: "favicon/site.webmanifest" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Puente Technology and Design' },
            { name: 'keywords', content: 'software, design, technology' },
            { name: 'msapplication-TileColor', content: '#da532c' },
            { name: 'theme-color', content: '#ffffff' },
          ]}
          link={[
            { rel: 'apple-touch-icon', sizes: '180x180', href: `${appleTouchIcon}` },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: `${favicon32}`,
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: `${favicon16}`,
            },
            { rel: 'manifest', href: `${data.site.siteMetadata.title}` },
            { rel: 'mask-icon', color: '#5bbad5', href: `${maskIcon}` },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
