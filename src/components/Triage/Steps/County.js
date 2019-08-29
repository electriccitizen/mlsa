import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';
//import SelectSearch from 'react-select-search'
import Select from 'react-select'


// const Option = ({ type = "option", index, term, node, name, checked = false, onChange }) => {
//   console.log("Checkbox: ", name, checked);
//   return (
//     <option key={index} name={name} value={term.node.name}>{term.node.name}</option>
//   );
// };

export function County(props) {
  const data = useStaticQuery(graphql`
    query CountyQuery2 {
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



  const [selected, setSelected] = useState('');
  const [checkedItems4, setCheckedItems4] = useLocalStorage('county', '');


  const handleChange = selectedOption => {
    setSelected(selectedOption)
    setCheckedItems4('')
    setCheckedItems4({
      ...checkedItems4,
      [selectedOption.value]: selectedOption.value
    });
    console.log(`Option setSelected:`, selected);
  };

  const handleChange2 = event => {
    //setCheckedItems4('')
    setCheckedItems4({
      ...checkedItems4,
      [event.target.value]: event.target.value
    });
  };
  const options = data.allTaxonomyTermCounty.edges.map(function(val) {
    return {
      value: val.node.name,
      label: val.node.name
    };
  });

  const CountySearch = () => (
    <Select value={selected} onChange={handleChange} options={options} />
  )

  return (
    <>
     <CountySearch />

      <a onClick={e => setCheckedItems4('')}>Reset</a>

    </>

  );
}