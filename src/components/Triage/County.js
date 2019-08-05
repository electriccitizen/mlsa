import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

export function County() {
 const data = useStaticQuery(graphql`
    query CountyQuery {
        allTaxonomyTermCounty {
          edges {
            node {
              drupal_id
              name
            }
          }
        }
    }
  `)

  return (
    <select name="county">
      {
        data.allTaxonomyTermCounty.edges.map(
          (term, index) =>
            (
              <>
              <option key={index} name="subscribe" value={term.node.name}>

                {term.node.name}</option>

              </>
            )
        )}
    </select>
  );
}