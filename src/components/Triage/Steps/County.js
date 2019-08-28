import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { createContainer } from "unstated-next"
import useLocalStorage from '../../../hooks/use-local-storage';
const Option = ({ type = "option", index, term, node, name, checked = false, onChange }) => {
  console.log("Checkbox: ", name, checked);
  return (
    <option key={index} name={name} value={term.node.name}>{term.node.name}</option>
  );
};

export function County(props) {
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
  const [checkedItems4, setCheckedItems4] = useLocalStorage('county', '');

  const handleChange = event => {

    setCheckedItems4('')

    setCheckedItems4({
      ...checkedItems4,
      [event.target.name]: event.target.value
    });
  };
  return (
    <>
      <select onChange={handleChange}  class="mb-8" name="county">
        {
          data.allTaxonomyTermCounty.edges.map(
            (term, index) =>
              (
                <>
                  <Option
                      name={term.node.name}
                      value={checkedItems4[term.node.name]}
                      key={index}
                      term={term}
                    />

                </>
              )
          )}
      </select>

      <a onClick={e => setCheckedItems4('')}>Reset</a>

    </>

  );
}