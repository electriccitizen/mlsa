import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

export function Related() {
 const data = useStaticQuery(graphql`
    query RelatedQuery {
        allTaxonomyTermRelatedIssues {
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
        data.allTaxonomyTermRelatedIssues.edges.map(
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