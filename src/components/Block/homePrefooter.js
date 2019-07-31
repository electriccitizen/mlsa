import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import Img from 'gatsby-image';

const HomePrefooter = () => {

  const homefoot = useStaticQuery(graphql`
    query homefoot {
      allBlockContentHomepagePrefooterImage(filter: {drupal_internal__id: {eq: 8}}) {
        edges {
          node {
            drupal_internal__id
            relationships {
              field_image {
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
        }
      }
    }
  `)

  return (
    homefoot.allBlockContentHomepagePrefooterImage.edges.map(({ node }) => (
      <div className="prefooter-wrapper" id={ `block-${node.drupal_internal__id}`} key={node.drupal_internal__id}>
        <Img fluid={node.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid} alt={node.relationships.field_image.field_media_image.alt} />
      </div>
    ))
  )
}

export default HomePrefooter;
