import React from 'react';
import FilterIcon from '../../images/filter.svg';
import FilterGroup from './filterGroup';

class FilterToggle extends React.Component {
  constructor() {
    super();
    this.state = {
      shown: false,
    };
  } 
  
  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }
    
  render() {
    var shown = this.state.shown ? "display-filters" : "";
    
    return (
      <div className="lg:w-1/4 mb-10">
        <div className="lg:hidden m-auto max-w-xs relative">
          <button className="bg-green-mid hover:bg-grey-dark focus:bg-grey-dark text-white text-20 text-left font-header font-extrabold px-4 py-3half w-full" onClick={this.toggle.bind(this)} aria-controls="resource-filter-list" aria-expanded={String(shown ? 'true' : 'false')}>
            {shown ? 'Close Filters:' : 'Filters Results:'}
            <FilterIcon className="filter-icon" />
          </button>
        </div>
        <div className="hidden relative lg:block bg-green-mid text-white text-20 font-header font-extrabold px-4 py-8">
          Filter Results:
          <FilterIcon className="filter-icon" />
        </div>
        <div id="resource-filter-list" className={`filter-list bg-white-dark pt-8 pb-6 px-3 ${shown}`} aria-hidden={String(shown ? 'false' : 'true')}>
          <FilterGroup name="Crimes" attribute="crime" limit={20} />
          <FilterGroup name="Related Issue" attribute="issue" limit={20} />
          <FilterGroup name="Categories" attribute="category" limit={20} />
          <FilterGroup name="Areas served" attribute="county" limit={60} />
          <FilterGroup name="Resource Type" attribute="type" noscroll />
        </div>
      </div>
    )
  }
}

export default FilterToggle;