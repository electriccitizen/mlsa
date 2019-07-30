import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';

class FilterGroup extends React.Component {
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
    var shown = this.state.shown ? "display-group" : "";
    
    return (
      <div className="filter-group">
        <h3><button className={`filter-group-toggle ${shown}`} onClick={this.toggle.bind(this)}>{this.props.name}</button></h3>
        <RefinementList
          attribute={this.props.attribute}
          limit={this.props.limit}
          className={`filter-group-list ${shown} ${this.props.noscroll ? 'noscroll' : ''}`}
          showMore={this.props.showmore}
          showMoreLimit={this.props.showlimit}
        />
      </div>
    )
  }
}

export default FilterGroup;