import React from 'react';
import AnimateHeight from 'react-animate-height';

class AccordionItem extends React.Component {

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
      <div className="pb-4">
        <div>
          <button className="block h4 text-blue underline hover:text-green-dark hover:no-underline focus:text-green-dark focus:no-underline mb-2" onClick={this.toggle.bind(this)} aria-controls={`accordion-${this.props.id}`} aria-expanded={String(shown)}>
            {this.props.header}
          </button>
        </div>
        <AnimateHeight duration={500} height={height} id={`accordion-${this.props.id}`} aria-hidden={String(shown)}>
          <div className="accordion-text long-text" dangerouslySetInnerHTML={{ __html: this.props.content}} />
        </AnimateHeight>
      </div>
    )
  }

};

export default AccordionItem;
