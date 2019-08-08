import React from 'react';
import { graphql } from 'gatsby';
//import moment from 'moment'
import Layout from '../components/Layout/layout';
import Page from '../components/Page/Page';
import SEO from "../components/Layout/seo";

const pageTemplate = (props) => {
  const { nodePage: page } = props.data;

  return (
    <Layout>
      <SEO
        title={page.relationships.field_header.field_title}
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Page
        info={page}
        header={page.relationships.field_header}
        content={page.relationships.field_content}
        prefooter={page.relationships.field_prefooter_image}
      />
    </Layout>
  )
};

export default pageTemplate;

export const query = graphql `
  query pageTemplate($drupal_id: String!) {
    nodePage(drupal_id: {eq: $drupal_id}) {
      drupal_id
      drupal_internal__nid
      title
      path {
        alias
      }
      created
      changed
      relationships {
        field_prefooter_image {
          id
          relationships {
            field_single_image {
              field_media_image {
                alt
              }
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      fluid(fit: COVER, maxWidth: 2280, jpegProgressive: true) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
        field_header {
          drupal_id
          field_title
          field_subheader
        }
        field_content {
          __typename
          ... on paragraph__accordion_group {
            drupal_id
          }
          ... on paragraph__button {
            drupal_id
            field_header
            field_buttons {
              title
              uri
            }
          }
          ... on paragraph__horizontal_rule {
            drupal_id
          }
          ... on paragraph__image {
            drupal_id
          }
          ... on paragraph__react_component {
            drupal_id
            drupal_internal__id
            relationships {
              field_components {
                drupal_internal__tid
                id
              }
            }
          }
          ...on paragraph__text {
            drupal_id
            field_header
            field_text {
              processed
            }
          }
          ... on paragraph__text_with_image {
            drupal_id
          }
          ... on paragraph__video {
            drupal_id
          }  
        }
      }
    }
  }
`;