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

export function County(props) {
  //const [crime, setCrime] = useState(false);
  const [crime, setCrime] = useLocalStorage('crime', 'murder');

  const data = useStaticQuery(graphql`
    query CountyQuery {
        allTaxonomyTermCounty {
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
      <select class="mb-8" name="county">
      {
        data.allTaxonomyTermCounty.edges.map(
          (term, index) =>
            (
              <>
              <option key={index} name="subscribe" value={term.node.name}>

                {term.node.name}</option>

              </>
            )
        )}
    </select>
    </>

  );
}