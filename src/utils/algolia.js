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
            field_icon
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
  arr.map(
    ( { node: { title, relationships, field_url, field_description, ...rest }}) =>
        (
          {
            title,
            crime: relationships.crime ? relationships.crime.map(crimeObj => crimeObj.name) : null,
            issue: relationships.issue ? relationships.issue.map(issueObj => issueObj.name) : null,
            category: relationships.category ? relationships.category.map(categoryObj => categoryObj.name) : null,
            county: relationships.county ? relationships.county.map(countyObj => countyObj.name) : null,
            type: relationships.type ? relationships.type.map(typeObj => typeObj.name) : null,
            icon: relationships.type ? relationships.type.map(iconObj => iconObj.field_icon) : null,
            ...field_description,
            ...field_url,
            ...rest
          }
        )
    );

const queries = [
  {
    query: resourceQuery,
    transformer: ({ data }) => flatten(data.resources.edges),
    indexName: `Resources`,
    settings,
  },

]



module.exports = queries