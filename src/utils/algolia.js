const resourceQuery = `{
  resources: allNodeResource {
          edges {
            node {
              drupal_id
              changed
              status
              title
              field_description {
                description: value
              }
              field_url {
                url: uri
              }
              relationships {
                crime: field_crime {
                  name
                }
                issue: field_related_issue {
                  name
                }
                category: field_related_category {
                  name
                }
                county: field_county {
                  name
                }
                type: field_resource_type {
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

// const flatten = arr =>
//   arr.flatMap(({ node: field_description, relationships,field_url, }) => relationships.flatMap(
//     ({ crime:  name,  ...rest }) => ({
//     ...field_url,
//     ...field_description,
//     ...crime,
//     ...rest,
//
//   }
// )
//
//   ))

const flatten = arr =>
  arr.map(({ node: { relationships,url, } }) => ({
  }) => relationships.map(({crime: {name, ...rest}}) => ({
    ...crime,
    ...relationships,
    ...name,
    ...url,
    ...rest,

    }),
    alert(arr.uri)


  ))

const queries = [
  {
    query: resourceQuery,
    transformer: ({ data }) => flatten(data.resources.edges),
    indexName: `Resources`,
    settings,
  },

]



module.exports = queries