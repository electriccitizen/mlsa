import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

export function Crime() {
 const data = useStaticQuery(graphql`
    query CrimeQuery {
        allTaxonomyTermCrime {
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
    <div>
      {
        data.allTaxonomyTermCrime.edges.map(
          (term, index) =>
            (
              <div>xx{term.node.name}</div>
            )
        )}
    </div>
  );
}