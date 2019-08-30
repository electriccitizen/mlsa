import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import useLocalStorage from '../../../hooks/use-local-storage';
import Select from 'react-select'

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
    console.log(`Option setSelected:`, selectedOption);
  };

  const customStyles = {
    control: (styles, state) => ({ 
      ...styles, 
      borderRadius: 0,
      borderColor: state.isFocused ? '#979797' : '#979797',
      boxShadow: state.isFocused ? '0 0 2px #1155cc' : 0,
      '&:hover': {
        borderColor: state.isFocused ? '#979797' : '#979797',
      }
    }),
    dropdownIndicator: (styles, state) => ({ 
      ...styles, 
      color: '#1f2225',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#1155cc' : '#1f2225',
      backgroundColor: state.isSelected ? "#ffffff" : provided,
      padding: '8px 20px',
      ':hover':{
        backgroundColor: '#eeeeee',
      },
      ':focus':{
        backgroundColor: '#eeeeee',
      }
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }

  const CountySearch = () => (
    <Select className="max-w-xs mb-12 text-15" styles={customStyles} value={selected} onChange={handleChange} options={options} />
  )

  return (
     <CountySearch />
  );
}