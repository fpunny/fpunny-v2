const { author, keywords, description } = require(`./package.json`);
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: author,
    description,
    keywords,
    author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        anonymize: true,
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `frederic-pun-personal`,
        short_name: `fpunny-site`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: process.env.PRIMARY_COLOR,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
  ],
};
