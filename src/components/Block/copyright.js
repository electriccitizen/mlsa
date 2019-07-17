import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Copyright = () => {

  const copy = useStaticQuery(graphql`
    query Copyright {
      allBlockContentBasic(filter: {drupal_internal__id: {eq: 1}}) {
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
    copy.allBlockContentBasic.edges.map(({ node }) => (
      node.drupal_internal__id === 1 &&
        <div id={ `block-${node.drupal_internal__id}`} key={node.drupal_id} className="text-black text-center text-16 md:text-left lg:text-18 lg:text-grey-dark">
          <div dangerouslySetInnerHTML={{ __html: node.body.processed}} />
        </div>
      
    ))
  )
}

export default Copyright;