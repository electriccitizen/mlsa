const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allNodePage {
            edges {
              node {
                drupal_id
                title
                created
                path {
                   alias, 
                }
              }
            }
          }
        }    
          `).then(result => {

            if (result.errors) {
              reject(result.errors)
            }


            // Create pages for each basic page.
            result.data.allNodePage.edges.forEach(({ node }) => {

              let path_alias;
              if (node.path.alias == null) {
                path_alias = `${node.drupal_id}`;
              } else {
                path_alias = node.path.alias;
              }

              createPage({
                path: path_alias,
                component: path.resolve(`./src/templates/page.js`),
                context: {
                  drupal_id: node.drupal_id,
                },
              })
            });

        resolve()

          })
    )
  })
}
