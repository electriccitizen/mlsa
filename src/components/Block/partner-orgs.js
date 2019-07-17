import React from "react";
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";

const Partners = () => {

  const partner = useStaticQuery(graphql`
    query partner {
      allBlockContentLogoGrid(filter: {drupal_internal__id: {eq: 4}}) {
        edges {
          node {
            drupal_internal__id
            info
            relationships {
              field_logo_grid {
                field_link {
                  uri
                }
                relationships {
                  field_single_image {
                    field_media_image {
                      alt
                    }
                    relationships {
                      field_media_image {
                        drupal_internal__fid
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 200, jpegProgressive: true) {
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
  `)
  
  return (    
    partner.allBlockContentLogoGrid.edges.map(({ node }) => (
      <div className="max-w-1080px m-auto mb-5">
        <h2 className="font-header font-extrabold text-center">{node.info}</h2>
        <ul className="flex flex-row flex-wrap justify-between items-center logo-grid m-auto">
          {node.relationships.field_logo_grid.map((logoItem, index) => (
            <li className={"px-4 mb-3 w-1/2 md:px-5 md:w-1/4 image-" + logoItem.relationships.field_single_image.relationships.field_media_image.drupal_internal__fid}>
              {logoItem.field_link ? <a className="hover:opacity-75 focus:opacity-75 block border border-transparent hover:border-grey" href={logoItem.field_link.uri} target="_blank" rel="noopener noreferrer">
                <Img fluid={logoItem.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.fluid} alt={logoItem.relationships.field_single_image.field_media_image.alt} />
                </a>
              : <Img fluid={logoItem.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.fluid} alt={logoItem.relationships.field_single_image.field_media_image.alt} />
              }
            </li>
          ))}
        </ul>
      </div>
    ))
  )
}

export default Partners;
