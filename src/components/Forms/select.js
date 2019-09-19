import React, {Component} from 'react';
import Select from 'react-select';

class SelectElement extends Component {
	render() {

		const options = this.props.options.map(function(opt) {
	    return {
	    	value: opt.value,
	    	label: opt.label
	    }
	  });

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
	  return (
	    <Select className={`text-15 ${this.props.classes}`} type="select" styles={customStyles} placeholder={this.props.placeholder} value={this.props.selected} name={this.props.name} onChange={this.props.onChange} options={options} />
	  );
	}
}

export default SelectElement;
