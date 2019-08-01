import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';
import AnimateHeight from 'react-animate-height';

class FilterGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
    };
  } 
  
  toggle = () => {
    const { height } = this.state;
 
    this.setState({
      height: height === 0 ? 250 : 0,
    });
  };
    
  render() {
    const { height } = this.state;
    let shown = this.state.height === 250 ? "true" : "false";
    
    return (
      <div className="filter-group">
        <h3><button className={`filter-group-toggle ${String(shown) === 'true' ? 'display-group' : ''}`} onClick={this.toggle.bind(this)} aria-controls={`filter-${this.props.attribute}`}  aria-expanded={String(shown)}>{this.props.name}</button></h3>
        <AnimateHeight duration={500} height={height} id={`filter-${this.props.attribute}`} aria-hidden={String(shown)} className={`filter-group-list ${this.props.noscroll ? 'noscroll' : ''}`}>
          <RefinementList
            attribute={this.props.attribute}
            limit={this.props.limit}
            id={`filter-${this.props.attribute}`}
            showMore={this.props.showmore}
            showMoreLimit={this.props.showlimit}
          />
        </AnimateHeight>
      </div>
    )
  }
}

export default FilterGroup;