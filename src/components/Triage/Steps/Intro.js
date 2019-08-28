import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export function Intro(foo) {
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
      ...checkedItems,
      [event.target.name]: event.target.checked,
      //['xxxxxx']: event.target.name,
    });
    console.log("checkedItems: ", checkedItems);
  };

  return (
    <>
    <ul className="mb-8">
      {
        data.allTaxonomyTermAudienceOptions.edges.map(
          (term, index) =>
            (
              <li key={index}>
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
      <a onClick={e => setCheckedItems('')}>Reset</a>
      <a onClick={e => window.localStorage.clear()}>Reset all</a>
      </>
  );
}
