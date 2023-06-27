import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import { GatsbyImage } from "gatsby-plugin-image"
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
      imageOne: file(relativePath: { eq: "big-sky-sunset-featured.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "montana-landscape-featured.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "wheat-featured.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { eq: "glacier-np-featured.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(relativePath: { eq: "sunny-mountain-river-featured.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let randImages = [
    <Img fluid={featured.imageOne.childImageSharp.fluid} alt="Sunset sky over Montana"/>,
    <Img fluid={featured.imageTwo.childImageSharp.fluid} alt="Cloudy sky over Montana mountains" />,
    <Img fluid={featured.imageThree.childImageSharp.fluid} alt="A close up of wheat stalks in the sun" />,
    <Img fluid={featured.imageFour.childImageSharp.fluid} alt="landscape photo of Glacier National Park" />,
    <Img fluid={featured.imageFive.childImageSharp.fluid} alt="A river winding through a mountain prairie in the sun" />
  ];
  let randomFeature = randImages[Math.floor(Math.random()*randImages.length)];

  return (
    featured.allBlockContentHomepageFeaturedContent.edges.map(({ node }) => (
      <div className="flex flex-row flex-wrap justify-center -mx-4 md:justify-start cmax:-mx-10" id={ `block-${node.drupal_internal__id}`} key={node.drupal_internal__id}>
        {node.relationships.field_featured_content.map((fContent, Index) => (
          <div className="w-full mb-4 px-4 max-w-md md:w-1/2 md:mb-8 lg:w-1/3" key={fContent.id}>
            <div className="border border-grey-mid flex flex-row items-stretch">
              <div className="card-image card-small">
                {fContent.relationships.field_header.relationships.field_featured_image ?
                  <Img fluid={fContent.relationships.field_header.relationships.field_featured_image.relationships.field_media_image.localFile.childImageSharp.fluid} />
                  : randomFeature
                }
              </div>
              <div className="card-text card-small">
                <h2 className="h3 leading-tight font-extrabold"><a className="hover:underline focus:underline" href={fContent.path.alias}>{fContent.relationships.field_header.field_title}</a></h2>
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
