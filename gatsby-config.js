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
        icon: `src/images/tailwind-icon.png`
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
    }
  ]
};
