import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';


const RandomImages = () => {

  const pageQuery = useStaticQuery(graphql`
    query pageQuery {
      imageOne: file(relativePath: { eq: "white-pines.jpg" }) {
        childImageSharp {
          fixed(fit: COVER, height: 350, width: 210, jpegProgressive: true){
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageTwo: file(relativePath: { eq: "train-bridge.jpg" }) {
        childImageSharp {
          fixed(fit: COVER, height: 350, width: 210, jpegProgressive: true){
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageThree: file(relativePath: { eq: "mountain-river.jpg" }) {
        childImageSharp {
          fixed(fit: COVER, height: 350, width: 210, jpegProgressive: true){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `
  )

  let randImages = [
    <Img fixed={pageQuery.imageOne.childImageSharp.fixed} alt="Trees in the winter"/>,
    <Img fixed={pageQuery.imageTwo.childImageSharp.fixed} alt="Train Bridge over river in the sunset" />,
    <Img fixed={pageQuery.imageThree.childImageSharp.fixed} alt="River in the mountains" />,
  ];
  
  return randImages[Math.floor(Math.random()*randImages.length)];
}

export default RandomImages;

