import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import RandomImages from '../Misc/rand-image';


const HomeFeatured = () => {

  const featured = useStaticQuery(graphql`
    query featured {
      allBlockContentHomepageFeaturedContent(filter: {drupal_internal__id: {eq: 5}}) {
        edges {
          node {
            drupal_internal__id
            relationships {
              field_featured_content {
                id
                path {
                  alias
                }
                relationships {
                  field_header {
                    field_title
                    field_summary
                    relationships {
                      field_featured_image {
                        field_media_image {
                          alt
                        }
                        relationships {
                          field_media_image {
                            localFile {
                              childImageSharp {
                                fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
                                  ...GatsbyImageSharpFluid
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
  `)

  return (
    featured.allBlockContentHomepageFeaturedContent.edges.map(({ node }) => (
      <div className="flex flex-row flex-wrap justify-center -mx-4 md:justify-start cmax:-mx-10" id={ `block-${node.drupal_internal__id}`} key={node.drupal_internal__id}>
        {node.relationships.field_featured_content.map((fContent, Index) => (
          <div className="w-full mb-4 px-4 max-w-md md:w-1/2 md:mb-8 lg:w-1/3">
            <div className="border border-grey-mid flex flex-row items-stretch" key={fContent.id}>
              <div class="card-image card-small">
                {fContent.relationships.field_header.relationships.field_featured_image ?
                  <Img fluid={fContent.relationships.field_header.relationships.field_featured_image.relationships.field_media_image.localFile.childImageSharp.fluid} />
                  : <RandomImages />
                }
              </div>
              <div className="card-text card-small">
                <h2 className="h3 leading-tight font-extrabold"><a href={fContent.path.alias}>{fContent.relationships.field_header.field_title}</a></h2>
                <p className="mb-0">{fContent.relationships.field_header.field_summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))
  )
}

export default HomeFeatured;
