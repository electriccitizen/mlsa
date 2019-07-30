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
    let shown = this.state.shown ? "display-group" : "";
    
    return (
      <div className="filter-group">
        <h3><button className={`filter-group-toggle ${shown}`} onClick={this.toggle.bind(this)} aria-controls={`filter-${this.props.attribute}`}  aria-expanded={String(shown ? 'true' : 'false')}>{this.props.name}</button></h3>
        <div id={`filter-${this.props.attribute}`} aria-hidden={String(shown ? 'false' : 'true')} className={`filter-group-list ${shown} ${this.props.noscroll ? 'noscroll' : ''}`}>
          <RefinementList
            attribute={this.props.attribute}
            limit={this.props.limit}
            id={`filter-${this.props.attribute}`}
            showMore={this.props.showmore}
            showMoreLimit={this.props.showlimit}
          />
        </div>
      </div>
    )
  }
}

export default FilterGroup;