import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import Page from '../components/Page/Page';

const IndexPage = (props) => {
  const { nodePage: page } = props.data;

  return (
    <Layout>
      <SEO
        title={page.relationships.field_header.field_title}
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        abstract='Montana Crime Victim Help is an online resource that connects you with legal help and other supportive services on issues for victims of crime related to safety, housing, family, employment, finances, and more.'
        pageUrl='/'
        footerImage={page.relationships.field_prefooter_image.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.original.src}
        changed={page.changed}
        shortLink='/'
      />
      <Page
        info={page}
        header={page.relationships.field_header}
        content={page.relationships.field_content}
        prefooter={page.relationships.field_prefooter_image}
      />
    </Layout>
  )
}

export default IndexPage;

export const query = graphql `
  query indexPage {
    nodePage(drupal_internal__nid: {eq: 21}) {
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
                      fluid(fit: COVER, maxWidth: 2280, jpegProgressive: true, quality: 65) {
                        ...GatsbyImageSharpFluid
                      }
                      original {
                        src
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
            field_header
            relationships {
              field_accordions {
                drupal_id
                field_accordion_header
                field_text {
                  processed
                }
              }
            }
          }
          ... on paragraph__button {
            drupal_id
            field_header
            field_buttons {
              title
              uri
              alias
            }
          }
          ... on paragraph__files {
            drupal_id
            field_header
            relationships {
              field_files {
                drupal_id
                relationships{
                  field_media_file{
                    localFile{
                      url
                      name
                      extension
                    }
                  }
                }
              }
            }
          }
          ... on paragraph__horizontal_rule {
            drupal_id
          }
          ... on paragraph__image {
            drupal_id
            field_header
            field_link {
              uri
              alias
            }
            relationships {
              field_single_image {
                field_caption
                field_media_image {
                  alt
                }
                relationships {
                  field_media_image {
                    localFile {
                      childImageSharp{
                        fluid(maxWidth: 1080, jpegProgressive: true, quality: 65) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
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
            field_header
            field_image_placement
            field_link {
              uri
              alias
            }
            field_text {
              processed
            }
            relationships {
              field_single_image {
                field_caption
                field_media_image {
                  alt
                }
                relationships {
                  field_media_image {
                    localFile {
                      childImageSharp{
                        fluid(maxWidth: 760, jpegProgressive: true, quality: 65) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on paragraph__video {
            drupal_id
            relationships {
              field_video {
                field_media_oembed_video
                name
              }
            }
          }  
        }
      }
    }
  }
`;