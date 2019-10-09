import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';
import Checkbox from '../../Forms/checkbox';

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

  const [checkedItems1, setCheckedItems1] = useLocalStorage('crime', '');
  const handleChange = event => {
    setCheckedItems1('')
    setCheckedItems1({
      ...checkedItems1,
      [event.target.name]: event.target.checked
    });
  };

  return (
      <ul className="mb-8">
      {
        data.allTaxonomyTermCrime.edges.map(
          (term, index) =>
            (
              <li key={index}>
                <label className="checkbox">
                  <Checkbox
                    name={term.node.name}
                    checked={checkedItems1[term.node.name]}
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