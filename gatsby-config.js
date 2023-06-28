
const queries = require("./src/utils/algolia")
require("dotenv").config()

module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    title: `MT Crime Victim Help`,
    siteUrl: `https://www.mtcrimevictimhelp.org`,
    description: `Resources for crime victims in the state of Montana.`,
    author: `@broeker`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,

    // ALGOLIA
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000, // default: 1000
        routing: true,
      },
    },

    // SOURCE DRUPAL
    {
      resolve: 'gatsby-source-drupal',
      options: {
         baseUrl: 'http://dev-mtcv.pantheonsite.io/',
         // baseUrl: 'http://mtcv.docksal.site/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    },
    // SOURCE FILESYSTEM (STATIC IMAGES)
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
        name: `gatsby-mlsa`,
        short_name: `MLSA`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#757575`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'ocv7axb'
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-151582273-1", // Google Analytics / GA
            "G-HP0BH69LJ3"
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ]
};
