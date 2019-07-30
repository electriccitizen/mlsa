import React from 'react';
//import Text from '../Paragraphs/text';

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
        <h2>{this.props.header.field_subheader}</h2>
        <div>
          {this.props.content.map((paragraphItem, index) => (
            <div key={paragraphItem.drupal_id}>
              {paragraphItem.__typename}
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Page;