import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  console.log("Checkbox: ", name, checked);
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export function Category(props) {
  //const [crime, setCrime] = useState(false);
  const [crime, setCrime] = useLocalStorage('crime', 'murder');

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
    console.log("checkedItems: ", checkedItems3);
  };
  console.log(props)

  //console.log(localStorage.getItem('crime'))
  return (
    <>
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

      <a onClick={e => setCheckedItems3('')}>Reset</a>
    </>

  );
}