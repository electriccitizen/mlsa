import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';
import Checkbox from '../../Forms/checkbox';

export function Category(props) {

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

  const [checkedItems3, setCheckedItems3] = useLocalStorage('category', '');

  const handleChange = event => {
    setCheckedItems3({
      ...checkedItems3,
      [event.target.name]: event.target.checked
    });
  };

  return (
      <ul className="mb-8">
        {
          data.allTaxonomyTermResourceCategory.edges.map(
            (term, index) =>
              (
                <li key={index}>
                  <label className="checkbox">
                    <Checkbox
                      name={term.node.name}
                      checked={checkedItems3[term.node.name]}
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