import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';
import SelectElement from '../../Forms/select';

export function County() {

  // Select list data
  const data = useStaticQuery(graphql`
    query CountyQuery2 {
        allTaxonomyTermCounty(sort: {fields: name, order: ASC}) {
          edges {
            node {
              drupal_id
              name
            }
          }
        }
    }
  `)

  //Select list options
  const options = data.allTaxonomyTermCounty.edges.map(function(val) {
    return {
      value: val.node.name,
      label: val.node.name
    };
  });

  // State and local storage
  const [selected, setSelected] = useState('');
  const [checkedItems4, setCheckedItems4] = useLocalStorage('county', '');

  // Change handler
  const handleChange = selectedOption => {
    setSelected(selectedOption)
    setCheckedItems4('')
    setCheckedItems4({
      ...checkedItems4,
      [selectedOption.value]: selectedOption.value
    });
  };

  const CountySearch = () => (
    <SelectElement classes="max-w-xs mb-12" name="county" selected={selected} placeholder="Select County" onChange={handleChange} options={options} />
  )

  return (
     <CountySearch />
  );
}