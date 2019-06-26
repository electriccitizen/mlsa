import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";

import Page from '../components/Page/Page';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const pageTemplate = (props) => {
  const { classes } = props;
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
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Page
          changed={'foo date'}
          content={page.relationships.field_section}
          hero={page.relationships.field_header}
        />

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
      field_header {
        field_title
        field_color_mode
        field_hide_headline
        field_subheader
        field_hero_bg {
          color
          opacity
        }
        relationships {
          field_hero_image {
            drupal_id
            relationships {
              field_media_image {
                localFile {
                  publicURL
                  childImageSharp {
                    fluid(
                    maxWidth: 200, 
                    duotone: {
                    highlight: "#f00e2e",
                    shadow: "#192550"
                    }
                    ) 
                    {
                      ...GatsbyImageSharpFluid
                      
                    }
                  }
                }
              }
            }
          }
          field_buttons {
            drupal_id 
            field_button_text
            field_icon
            field_button_link {
              uri
              title
            }
            field_button_size
            field_button_style
            field_button_color
          }
        }
      }
      field_section {
        field_background_color {
          color
          opacity
        }
        __typename
        ... on paragraph__section {
          drupal_id
          relationships {
            field_content {
              __typename
              ... on paragraph__text {
                drupal_id
                field_special_fx
                field_header
                field_text {
                  value
                }
              }
              ... on paragraph__image {
                drupal_id
                field_special_fx
                field_caption {
                  value
                }
                relationships {
                  field_single_image {
                    drupal_id
                    relationships {
                      field_media_image {
                        drupal_id
                        filename
                        uri {
                          value
                          url
                        }
                        localFile {
                          publicURL 
                          childImageSharp {
                            fixed {
                              base64
                              tracedSVG
                              aspectRatio
                              width
                              height
                              src
                              srcSet
                              srcWebp
                              srcSetWebp
                              originalName
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on paragraph__grid {
                drupal_id
                field_columns
                relationships {
                  field_grid_content {
                    __typename
                    ... on paragraph__text {
                      drupal_id
                      field_special_fx
                      field_header
                      field_text {
                        value
                        processed
                      }
                    }
                    ... on paragraph__image {
                      drupal_id
                      field_special_fx
                      field_caption {
                        value
                      }
                      relationships {
                        field_single_image {
                          drupal_id
                          relationships {
                            field_media_image {
                              drupal_id
                              filename
                              uri {
                                value
                                url
                              }
                              localFile {
                                publicURL 
                                childImageSharp {
                                  fixed {
                                    base64
                                    tracedSVG
                                    aspectRatio
                                    width
                                    height
                                    src
                                    srcSet
                                    srcWebp
                                    srcSetWebp
                                    originalName
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } 
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;