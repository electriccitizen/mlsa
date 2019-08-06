import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../hooks/use-local-storage';

export function Crime(props) {
  //const [crime, setCrime] = useState(false);
  const [crime, setCrime] = useLocalStorage('crime', 'murder');


  // const handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;



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
  console.log(props)

  return (
    <>
      What is your crime? <input type="text" onChange={e => setCrime(e.target.value)}  name="crime" id="crime" value={crime} />

      <a onClick={e => setCrime('')}>Reset</a>
      </>

  );
}