import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

export function Category() {
 const data = useStaticQuery(graphql`
    query CategoryQuery {
        allTaxonomyTermResourceCategory {
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
        data.allTaxonomyTermResourceCategory.edges.map(
          (term, index) =>
            (
              <li>
              <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
                <label htmlFor="subscribeNews">{term.node.name}</label>
              </li>
            )
        )}
    </ul>
  );
}