/* -----------------------------------------------------------------------------*

FILE
/gatsby-config.js

DESCRIPTION
The file gatsby-config.js defines your site’s metadata, plugins, and other
general configuration. This file should be in the root of your Gatsby site.

READ MORE
https://www.gatsbyjs.org/docs/api-files-gatsby-config/

*----------------------------------------------------------------------------- */

module.exports = {
  siteMetadata: {
    title: `Jules Thivent - Product and UX Designer – Portfolio`,
    description: `Jules Thivent - Product and UX Designer – Portfolio`,
    author: `Jules Thivent`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sri",
      options: {
        hash: "sha256",
        crossorigin: false,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        reportOnly: false,
        mergeScriptHashes: true,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' data: *.google-analytics.com *.cloudfront.net",
          "script-src-elem":
            "'self' 'unsafe-inline' data: *.google-analytics.com *.cloudfront.net",
          "font-src": "data: 'self' fonts.gstatic.com *.cloudfront.net",
          "style-src":
            "data: 'unsafe-inline' 'self' *.googleapis.com *.cloudfront.net",
          "style-src-elem":
            "data: 'unsafe-inline' 'self' *.googleapis.com *.cloudfront.net blob:",
          "img-src":
            "data: 'self' *.google-analytics.com  *.doubleclick.net *.ctfassets.net *.cloudfront.net",
          "frame-src": "'self' *.google.com *.figma.com",
        },
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jules-thivent-portfolio`,
        short_name: `jt`,
        start_url: `/`,
        icon: `src/images/favicon.svg`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-75777892-3",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i6guo7zsdt38`,
        accessToken: `H0HnqTsu7-sLQd3kNghCBeKyVIlNSiYP8i0R6MZc31I`,
        host: `preview.contentful.com`,
        forceFullSync: true,
      },
    },
  ],
};
