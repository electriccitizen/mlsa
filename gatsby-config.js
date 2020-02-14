
const queries = require("./src/utils/algolia")
require("dotenv").config()

module.exports = {
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

    // ALGOLIA
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
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
        //baseUrl: 'http://mtcv.docksal/',
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
    // GOOGLE ANALYTICS
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151582273-1",
      },
    }
  ]
};
