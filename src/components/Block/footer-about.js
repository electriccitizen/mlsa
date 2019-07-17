import React from "react";
import { useStaticQuery, graphql } from "gatsby";


const FooterAbout = () => {

  const about = useStaticQuery(graphql`
    query footerAbout {
      allBlockContentBasic(filter: {drupal_internal__id: {eq: 2}}) {
        edges {
          node {
            drupal_internal__id
            drupal_id
            body {
              processed
            }
            info
          }
        }
      }
    }
  `)

  return (
    about.allBlockContentBasic.edges.map(({ node }) => (
      <div id={ `block-${node.drupal_internal__id}`} key={node.drupal_id} className="text-black-dark">
        <div dangerouslySetInnerHTML={{ __html: node.body.processed}} />
      </div>
      
    ))
  )
}

export default FooterAbout;