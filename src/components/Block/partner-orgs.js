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
              field_logos {
                relationships {
                  field_media_image {
                    localFile {
                      publicURL
                      childImageSharp {
                        fixed(width: 200, jpegProgressive: true) {
                          base64
                          tracedSVG
                          aspectRatio
                          width
                          height
                          src
                          srcSet
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
  `)

  return (    
    partner.allBlockContentLogoGrid.edges.map(({ node }) => (
      <div>
        <h2>{node.info}</h2>
        <ul>
          {node.relationships.field_logos.map((logoImage, index) => (
            <li><Img fixed={logoImage.relationships.field_media_image.localFile.childImageSharp.fixed} /></li>
          ))}
        </ul>
      </div>
    ))
  )
}

export default Partners;
