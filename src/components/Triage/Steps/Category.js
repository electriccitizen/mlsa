import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

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
      <ul class="mb-8">
        {
          data.allTaxonomyTermResourceCategory.edges.map(
            (term, index) =>
              (
                <li key={index}>
                  {/*<input onChange={e => setIntro(e.target.value)} type="checkbox" name={term.node.name} value={intro} />*/}

                  <label>
                    <Checkbox
                      name={term.node.name}
                      checked={checkedItems3[term.node.name]}
                      onChange={handleChange}
                    />
                    {term.node.name}
                  </label>
                </li>
              )
          )}
      </ul>
  );
}