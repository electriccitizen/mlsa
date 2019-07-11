import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment'
import Layout from '../components/Layout/layout';
import Page from '../components/Page/Page';


const pageTemplate = (props) => {
  const { nodePage: page } = props.data;

  // Check for a valid media object and set to empty
  // (i think NULL or not defined will break?)
  //var media;
  //if (page.relationships.field_hero) {
  //  media = page.relationships.field_hero.relationships.field_media_image
  //} else {
  //  media = ''
  //}

  return (
    <Layout>
      <div>
        <Page
          header={page.relationships.field_header}
        />
      </div>
    </Layout>
  )
};

export default pageTemplate;

export const query = graphql `
  query pageTemplate($drupal_id: String!) {
    nodePage(drupal_id: {eq: $drupal_id}) {
      drupal_id
      title
      path {
        alias
      }
      created
      changed
      relationships {
        field_prefooter_image {
          id
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
            }
            ... on paragraph__horizontal_rule {
              drupal_id
            }
            ... on paragraph__image {
              drupal_id
            }
            ...on paragraph__text {
              drupal_id
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