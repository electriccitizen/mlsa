import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { createContainer } from "unstated-next"
import useLocalStorage from '../../hooks/use-local-storage';

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export function Crime(props) {
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
    console.log("checkedItems: ", checkedItems1);
  };

  //console.log(localStorage.getItem('crime'))
  return (
    <>
      <ul className="mb-8">
      {
        data.allTaxonomyTermCrime.edges.map(
          (term, index) =>
            (
              <li key={index}>
              {/*<input onChange={e => setIntro(e.target.value)} type="checkbox" name={term.node.name} value={intro} />*/}

                <label>
                <Checkbox
                  name={term.node.name}
                  checked={checkedItems1[term.node.name]}
                  onChange={handleChange}
                />
                {term.node.name}
                </label>
              </li>
            )
        )}
      </ul>

      <a onClick={e => setCheckedItems1('')}>Reset</a>
      </>

  );
}