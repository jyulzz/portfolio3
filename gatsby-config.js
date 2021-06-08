/* -----------------------------------------------------------------------------*

FILE
/gatsby-config.js

DESCRIPTION
The file gatsby-config.js defines your site’s metadata, plugins, and other
general configuration. This file should be in the root of your Gatsby site.

READ MORE
https://www.gatsbyjs.org/docs/api-files-gatsby-config/

*----------------------------------------------------------------------------- */

const path = require("path");

module.exports = {
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-75777892-3",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    {
      resolve: "gatsby-plugin-styled-jsx",
      options: {
        optimizeForSpeed: true,
        sourceMaps: true,
        vendorPrefixes: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/index.html`,
          `/404`,
          `/about`,
          `/work/design-systems`,
          `/work/esgn`,
          `/work/ov-chipkaart`,
          `/work/autosgn`,
          `/work/housinganywhere`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        language: "en",
        titleTemplate: `%s | Jules Thivent - Product and UX Designer – Portfolio`,
        openGraph: {
          type: "website",
          locale: "en_US",
          url: "https://www.julesthivent.com/",
          site_name: "Jules Thivent - Product and UX Designer – Portfolio",
        },
      },
    },
    "gatsby-plugin-dark-mode",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: [require("path").resolve(__dirname, "node_modules")],
        },
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "jules-thivent-portfolio",
        short_name: "jt",
        start_url: "/",
        icon: "src/assets/images/favicon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "i6guo7zsdt38",
        accessToken: "H0HnqTsu7-sLQd3kNghCBeKyVIlNSiYP8i0R6MZc31I",
        host: "preview.contentful.com",
        forceFullSync: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        conf: path.join(__dirname, "conf"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        options: path.join(__dirname, "src/options"),
        styles: path.join(__dirname, "src/styles"),
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: [`**/options.(js|ts)?(x)`],
        },
      },
    },
  ],
};
