import React from 'react';
class Page extends React.Component {

  renderElement(){
    if (this.props.content) {
      return (
        <div>
         save this render element for future paragraphs logic
        </div>
      );
    } else {
      return null
    }
  }

  render() {
    return (
      <>
        <h1>{this.props.header.field_title}</h1>
        <h3>{this.props.header.field_subheader}</h3>
      </>
    )
  }
}

export default Page;