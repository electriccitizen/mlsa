import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';
import Radio from '../../Forms/radio';

export function Intro() {

  const data = useStaticQuery(graphql`
    query IntroQuery {
        allTaxonomyTermAudienceOptions {
          edges {
            node {
              drupal_id
              name
              drupal_internal__tid
            }
          }
        }
    }
  `)

  const [checkedItems, setCheckedItems] = useLocalStorage('intro', '');

  const handleChange = event => {
    setCheckedItems({
      [event.target.name]: event.target.checked
    });
  };

  return (
    <ul className="mb-8">
      {
        data.allTaxonomyTermAudienceOptions.edges.map(
          (term, index) =>
            (
              <li key={index}>
                <label className="radio">
                  <Radio
                    name={term.node.name}
                    checked={checkedItems[term.node.name]}
                    onChange={handleChange}
                  />
                <span>{term.node.name}</span>
                </label>
              </li>
            )
        )}
      </ul>
  );
}
