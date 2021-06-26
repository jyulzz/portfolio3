const path = require("path");

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
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
        cssLoaderOptions: {
          modules: {
            compileType: "module",
          },
        },
        sassOptions: {
          includePaths: [
            require("path").resolve(__dirname, "node_modules"),
            require("path").resolve(__dirname, "src/styles"),
          ],
          implementation: require("sass"),
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
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "i6guo7zsdt38",
        accessToken: "M59L5uFxDXfUOZICpmdrExkB0yGf5Tz6KDOFh8NYvVY",
        host: "preview.contentful.com",
        forceFullSync: true,
        environment: "next",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        styles: path.join(__dirname, "src/styles"),
        components: path.join(__dirname, "src/components"),
        functions: path.join(__dirname, "src/functions"),
      },
    },
  ],
};
