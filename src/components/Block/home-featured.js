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
                                fixed(fit: COVER, height: 350, width: 210, jpegProgressive: true){
                                  ...GatsbyImageSharpFixed
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
      <div className="flex justify-center md:flex-row " id={ `block-${node.drupal_internal__id}`} key={node.drupal_internal__id}>
        {node.relationships.field_featured_content.map((fContent, Index) => (
          <div className="border border-mid-grey flex flex-row" key={fContent.id}>
            {fContent.relationships.field_header.relationships.field_featured_image ?
              <Img fixed={fContent.relationships.field_header.relationships.field_featured_image.relationships.field_media_image.localFile.childImageSharp.fixed} />
              : <RandomImages />
            }
            <div className="flex flex-column justify-center">
              <h2 className="h3">{fContent.relationships.field_header.field_title}</h2>
              <p>{fContent.relationships.field_header.field_summary}</p>
            </div>
          </div>
        ))}
      </div>
    ))
  )
}

export default HomeFeatured;
