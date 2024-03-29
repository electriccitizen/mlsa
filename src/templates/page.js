import React from 'react';
import { graphql } from 'gatsby';
//import moment from 'moment'
import Layout from '../components/Layout/layout';
import Page from '../components/Page/Page';
import Seo from "../components/Layout/seo";

const pageTemplate = (props) => {
  const { nodePage: page } = props.data;

  return (
    <Layout>
      <Seo
        title={page.relationships.field_header.field_title}
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        abstract={page.relationships.field_header.field_summary}
        pageUrl={page.path.alias}
        footerImage={page.relationships.field_prefooter_image.relationship ? page.relationships.field_prefooter_image.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.original.src : ''}
        changed={page.changed}
        shortLink={`node/${page.drupal_internal__nid}`}
      />
      <Page
        info={page}
        header={page.relationships.field_header}
        content={page.relationships.field_content}
        prefooter={page.relationships.field_prefooter_image.relationship ? page.relationships.field_prefooter_image : ''}
        restricted={page.field_restricted}
        randOne={props.data.imageOne.childImageSharp.gatsbyImageData}
        randTwo={props.data.imageTwo.childImageSharp.gatsbyImageData}
        randThree={props.data.imageThree.childImageSharp.gatsbyImageData}
        randFour={props.data.imageFour.childImageSharp.gatsbyImageData}
        randFive={props.data.imageFive.childImageSharp.gatsbyImageData}
      />
    </Layout>
  );
};

export default pageTemplate;

export const query = graphql `query pageTemplate($drupal_id: String!) {
  nodePage(drupal_id: {eq: $drupal_id}) {
    drupal_id
    drupal_internal__nid
    title
    path {
      alias
    }
    created
    changed
    field_restricted
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
                    gatsbyImageData(
                      quality: 65
                      transformOptions: {fit: COVER}
                      layout: FULL_WIDTH
                    )
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
        field_summary
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
              relationships {
                field_media_file {
                  localFile {
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
            title
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
                    childImageSharp {
                      gatsbyImageData( quality: 65, layout: FULL_WIDTH)
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
        ... on paragraph__text {
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
            title
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
                    childImageSharp {
                      gatsbyImageData(
                        width: 760
                        quality: 65
                        layout: CONSTRAINED
                      )
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
  imageOne: file(relativePath: {eq: "rancher-with-mountains.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 65
        transformOptions: {fit: COVER}
        layout: FULL_WIDTH
      )
    }
  }
  imageTwo: file(relativePath: {eq: "montana-landscape.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 65
        transformOptions: {fit: COVER}
        layout: FULL_WIDTH
      )
    }
  }
  imageThree: file(relativePath: {eq: "wheat.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 65
        transformOptions: {fit: COVER}
        layout: FULL_WIDTH
      )
    }
  }
  imageFour: file(relativePath: {eq: "glacier-np.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 65
        transformOptions: {fit: COVER}
        layout: FULL_WIDTH
      )
    }
  }
  imageFive: file(relativePath: {eq: "sunny-mountain-river.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 65
        transformOptions: {fit: COVER}
        layout: FULL_WIDTH
      )
    }
  }
}`;