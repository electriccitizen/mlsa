const resourceQuery = `{
  resources: allNodeResource {
          edges {
            node {
              drupal_id
              changed
              status
              title
              description: field_description {
                value
              }
              url: field_url {
                uri
              }
              relationships {
                field_crime {
                  name
                }
                field_related_issue {
                  name
                }
                field_region {
                  name
                }
              }
            }
          }
        }
}`




const settings = { attributesToSnippet: [
    `title`,
    `description`,
  ]}


const flatten = arr =>
  arr.map(({ node: { relationships,field_crime,url, ...rest } }) => ({
    ...field_crime,
    ...url,
    ...relationships,
    ...rest,
  }))

const queries = [
  {
    query: resourceQuery,
    transformer: ({ data }) => flatten(data.resources.edges),
    indexName: `Resources`,
    settings,
  },

]

module.exports = queries