module.exports = {
  siteMetadata: {
    title: 'Puente Technology and Design',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'puente-technology-and-design',
        short_name: 'puente',
        start_url: '/',
        background_color: '#e2de00',
        theme_color: '#e2de00',
        display: 'minimal-ui',
        icon: 'src/assets/images/puente-p.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
