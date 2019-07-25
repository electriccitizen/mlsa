import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';


const RandomImages = () => {

  const pageQuery = useStaticQuery(graphql`
    query pageQuery {
      imageOne: file(relativePath: { eq: "white-pines.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "train-bridge.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "mountain-river.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350, maxWidth: 210, jpegProgressive: true, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  )

  let randImages = [
    <Img fluid={pageQuery.imageOne.childImageSharp.fluid} alt="Trees in the winter"/>,
    <Img fluid={pageQuery.imageTwo.childImageSharp.fluid} alt="Train Bridge over river in the sunset" />,
    <Img fluid={pageQuery.imageThree.childImageSharp.fluid} alt="River in the mountains" />,
  ];
  
  return randImages[Math.floor(Math.random()*randImages.length)];
}

export default RandomImages;


