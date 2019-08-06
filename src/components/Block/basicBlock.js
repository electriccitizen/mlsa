import React from "react";

class BasicBlock extends React.Component {
  render() {
    return (
      <div id={ `block-${this.props.id}`} className={this.props.classes}>
        {this.props.info &&
          <h2>{this.props.info}</h2>
        }
        <div dangerouslySetInnerHTML={{ __html: this.props.body.processed}} />
      </div>
    )
  }
}

export default BasicBlock;