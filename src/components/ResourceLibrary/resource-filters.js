import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';
import FilterIcon from '../../images/filter.svg';

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
      <div className="lg:w-1/4">
        <div className="lg:hidden m-auto max-w-xs relative">
          <button className="bg-green hover:bg-grey-dark focus:bg-grey-dark text-white text-20 text-left font-header font-extrabold px-4 py-3half w-full" onClick={this.toggle.bind(this)}>
            Filter Results:
          </button>
          <FilterIcon className="filter-icon" />
        </div>
        <div className={`filter-list ${shown}`}>
          <div className="filter-group">
            <h3>Crimes</h3>
            <RefinementList
              attribute='crime'
              limit={20}
            />
          </div>
          <div className="filter-group">
            <h3>Related issues</h3>
            <RefinementList
              attribute='issue'
              limit={20}
            />
          </div>
          <div className="filter-group">
            <h3>Categories</h3>
            <RefinementList
              attribute='category'
              limit={20}
            />
          </div>
          <div className="filter-group">
            <h3>Areas served</h3>
            <RefinementList
              attribute='county'
              limit={5}
              showMore
              showMoreLimit={60}
            />
          </div>
          <div className="filter-group">
            <h3>Resource type</h3>
            <RefinementList attribute='type'/>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterToggle;