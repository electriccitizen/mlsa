import React from 'react';
import FilterIcon from '../../images/filter.svg';
import FilterGroup from './filterGroup';
import AnimateHeight from 'react-animate-height';

class FilterToggle extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
    };
  } 
  
  toggle = () => {
    const { height } = this.state;
 
    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };
    
  render() {
    const { height } = this.state;
    let shown = this.state.height === 'auto' ? "true" : "false";
    
    return (
      <div className="md:w-1/3 mb-10 lg:w-1/4">
        <div className="md:hidden m-auto max-w-xs relative">
          <button className="bg-green-mid hover:bg-grey-dark focus:bg-grey-dark text-white text-20 text-left font-header font-bold px-4 py-3half w-full" onClick={this.toggle.bind(this)} aria-controls="resource-filter-list" aria-expanded={String(shown)}>
            {String(shown) === 'true' ? 'Close Filters:' : 'Filters Results:'}
            <FilterIcon className="filter-icon" />
          </button>
        </div>
        <div className="hidden relative md:block bg-green-mid text-white text-20 font-header font-bold px-4 py-8">
          Filter Results:
          <FilterIcon className="filter-icon" />
        </div>
        <AnimateHeight duration={500} height={height} id="resource-filter-list" aria-hidden={String(shown)}>
          <div className={`filter-list bg-white-dark pt-8 pb-6 px-3 ${String(shown) === 'true' ? 'display-filters' : ''}`}>
            <FilterGroup name="Crimes" attribute="crime" limit={20} />
            <FilterGroup name="Related Issue" attribute="issue" limit={20} />
            <FilterGroup name="Categories" attribute="category" limit={20} />
            <FilterGroup name="Areas served" attribute="county" limit={60} />
            <FilterGroup name="Resource Type" attribute="type" noscroll />
          </div>
        </AnimateHeight>
      </div>
    )
  }
}

export default FilterToggle;