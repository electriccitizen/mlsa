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
    <ul>
      {
        data.allTaxonomyTermCrime.edges.map(
          (term, index) =>
            (
              <li key={index}>
              <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
                <label htmlFor="subscribeNews">{term.node.name}</label>
              </li>
            )
        )}
    </ul>
  );
}