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
  function FormState () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  }


  console.log(foo)
  const [checkedItems, setCheckedItems] = useLocalStorage('intro', '');
  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
    console.log("checkedItems: ", checkedItems);
  };

  const [intro, setIntro] = useLocalStorage('intro', 'joebody');
  const [goo, setGoo] = useLocalStorage('goo', 'yo ma');
  //console.log(localStorage.getItem('intro'))
  return (
    <>
    <ul className="mb-8">
      {
        data.allTaxonomyTermAudienceOptions.edges.map(
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

      <a onClick={e => setCheckedItems('')}>Reset</a>

      </>
  );
}
