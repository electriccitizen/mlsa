import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

export function Intro() {
 const data = useStaticQuery(graphql`
    query IntroQuery {
        allTaxonomyTermAudienceOptions {
          edges {
            node {
              drupal_id
              name
            }
          }
        }
    }
  `)
  const [intro, setIntro] = useState("");

  return (
    <ul>
      {
        data.allTaxonomyTermAudienceOptions.edges.map(
          (term, index) =>
            (
              <li key={index}>
              <input  onChange={e => setIntro(e.target.value)} type="checkbox" name="intro" value={term.node.name} />
                <label htmlFor="intro">{term.node.name}</label>
               {index}
              </li>
            )
        )}
    </ul>
  );
}