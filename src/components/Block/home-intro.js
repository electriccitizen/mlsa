import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';


const HomeIntro = () => {

  const intro = useStaticQuery(graphql`
    query intro {
      allBlockContentHomepageIntro(filter: {drupal_internal__id: {eq: 6}}) {
        edges {
          node {
            drupal_internal__id
            field_headline {
              processed
            }
            field_leadin
            relationships {
              field_image {
                field_media_image {
                  alt
                }
                relationships {
                  field_media_image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 540, jpegProgressive: true, maxHeight: 450) {
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
    intro.allBlockContentHomepageIntro.edges.map(({ node }) => (
      <div className="relative max-w-1080px m-auto mb-10" id={ `block-${node.drupal_internal__id}`} key={node.drupal_internal__id}>
        <div className="intro-text text-center md:text-left">
          <div className="text-56 font-header font-light relative mb-6 pb-1 leading-tight intro-headline md:text-60 md:mb-4 lg:text-64" dangerouslySetInnerHTML={{ __html: node.field_headline.processed}} />
          <div className="text-22 mb-16">{node.field_leadin}</div>
        </div>
        <div className="intro-image-wrapper">
          <div className="intro-image-inner">
            <Img className="intro-image" fluid={node.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid} alt={node.relationships.field_image.field_media_image.alt} />
          </div>
        </div>
      </div>
    ))
  )
}

export default HomeIntro;
