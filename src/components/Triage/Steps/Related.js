import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';
import Checkbox from '../../Forms/checkbox';

export function Related(props) {

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

  const [checkedItems2, setCheckedItems2] = useLocalStorage('related', '');

  const handleChange = event => {
    setCheckedItems2({
      ...checkedItems2,
      [event.target.name]: event.target.checked
    });
  };

  return (
      <ul className="mb-8">
        {
          data.allTaxonomyTermRelatedIssues.edges.map(
            (term, index) =>
              (
                <li key={index}>
                  <label className="checkbox">
                    <Checkbox
                      name={term.node.name}
                      checked={checkedItems2[term.node.name]}
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
