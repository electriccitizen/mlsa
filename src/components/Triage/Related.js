import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { createContainer } from "unstated-next"
import useLocalStorage from '../../hooks/use-local-storage';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  console.log("Checkbox: ", name, checked);
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export function Related(props) {
  //const [crime, setCrime] = useState(false);
  const [crime, setCrime] = useLocalStorage('crime', 'murder');

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


  const [checkedItems, setCheckedItems] = useLocalStorage('crime', '');
  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
    console.log("checkedItems: ", checkedItems);
  };
  console.log(props)

  //console.log(localStorage.getItem('crime'))
  return (
    <>
      <ul class="mb-8">
        {
          data.allTaxonomyTermRelatedIssues.edges.map(
            (term, index) =>
              (
                <li key={index}>
                  {/*<input onChange={e => setIntro(e.target.value)} type="checkbox" name={term.node.name} value={intro} />*/}

                  <label>
                    <Checkbox
                      name={term.node.name}
                      checked={checkedItems[term.node.name]}
                      onChange={handleChange}
                    />
                    {term.node.name}
                  </label>
                </li>
              )
          )}
      </ul>
    </>

  );
}




