import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const HomeFeatured = () => {

  const featured = useStaticQuery(graphql`query featured {
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
                            gatsbyImageData(
                              height: 350
                              width: 210
                              transformOptions: {fit: COVER}
                              layout: CONSTRAINED
                            )
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
  imageOne: file(relativePath: {eq: "big-sky-sunset-featured.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        height: 350
        width: 210
        transformOptions: {fit: COVER}
        layout: CONSTRAINED
      )
    }
  }
  imageTwo: file(relativePath: {eq: "montana-landscape-featured.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        height: 350
        width: 210
        transformOptions: {fit: COVER}
        layout: CONSTRAINED
      )
    }
  }
  imageThree: file(relativePath: {eq: "wheat-featured.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        height: 350
        width: 210
        transformOptions: {fit: COVER}
        layout: CONSTRAINED
      )
    }
  }
  imageFour: file(relativePath: {eq: "glacier-np-featured.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        height: 350
        width: 210
        transformOptions: {fit: COVER}
        layout: CONSTRAINED
      )
    }
  }
  imageFive: file(relativePath: {eq: "sunny-mountain-river-featured.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        height: 350
        width: 210
        transformOptions: {fit: COVER}
        layout: CONSTRAINED
      )
    }
  }
}`)

  let randImages = [
    <GatsbyImage
      image={featured.imageOne.childImageSharp.gatsbyImageData}
      alt="Sunset sky over Montana" />,
    <GatsbyImage
      image={featured.imageTwo.childImageSharp.gatsbyImageData}
      alt="Cloudy sky over Montana mountains" />,
    <GatsbyImage
      image={featured.imageThree.childImageSharp.gatsbyImageData}
      alt="A close up of wheat stalks in the sun" />,
    <GatsbyImage
      image={featured.imageFour.childImageSharp.gatsbyImageData}
      alt="landscape photo of Glacier National Park" />,
    <GatsbyImage
      image={featured.imageFive.childImageSharp.gatsbyImageData}
      alt="A river winding through a mountain prairie in the sun" />
  ];
  const randomFeature = randImages[Math.floor(Math.random()*randImages.length)];
   console.log(randomFeature)
  return featured.allBlockContentHomepageFeaturedContent.edges.map(({ node }) => (

    <div className="flex flex-row flex-wrap justify-center -mx-4 md:justify-start cmax:-mx-10" id={ `block-${node.drupal_internal__id}`} key={node.drupal_internal__id}>
      {/*{console.log(featured.allBlockContentHomepageFeaturedContent)}*/}
      {node.relationships.field_featured_content.map((fContent, Index) => (
        <div className="w-full mb-4 px-4 max-w-md md:w-1/2 md:mb-8 lg:w-1/3" key={fContent.id}>

          <div className="border border-grey-mid flex flex-row items-stretch">
            <div className="">
              {/*{console.log(fContent.relationships.field_header.relationships.field_featured_image.field_media_image.alt)}*/}
              {fContent.relationships.field_header.relationships.field_featured_image  ?
                  <GatsbyImage
                  image={fContent.relationships.field_header.relationships.field_featured_image.relationships.field_media_image.localFile.childImageSharp.gatsbyImageData}
                  // alt={fContent.relationships.field_header.relationships.field_featured_image.alt}
                  alt={fContent.relationships.field_header.relationships.field_featured_image.field_media_image.alt}
                  layout="contstrained"

                />:
                   randomFeature
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
  ));
}

export default HomeFeatured;
