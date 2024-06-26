const resourceQuery = `{
  resources: allNodeResource {
    edges {
      node {
        id
        drupal_id
        changed
        status
        title
        field_description {
          description: value
        }
        field_resource_url {
          url: uri
          alias: alias
        }
        internal_resource: field_internal_resource
        internal {
          # querying internal.contentDigest is required
          contentDigest
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
          org: field_organization {
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
  arr.map(
    ( { node: {id,drupal_id, title, relationships, field_resource_url, field_description, field_internal_resource, ...rest }}) =>
        (
          {
            objectID: id || drupal_id,
            title,
            crime: relationships.crime ? relationships.crime.map(crimeObj => crimeObj.name) : null,
            issue: relationships.issue ? relationships.issue.map(issueObj => issueObj.name) : null,
            category: relationships.category ? relationships.category.map(categoryObj => categoryObj.name) : null,
            county: relationships.county ? relationships.county.map(countyObj => countyObj.name) : null,
            type: relationships.type ? relationships.type.map(typeObj => typeObj.name) : null,
            icon: relationships.type ? relationships.type.map(iconObj => iconObj.field_icon) : null,
            org: relationships.org ? relationships.org.name : null,
            alias: field_resource_url.alias ? field_resource_url.alias : null,
            url: field_resource_url.url ? field_resource_url.url : null,
            ...field_description,
            ...field_internal_resource,
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