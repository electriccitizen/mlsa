import React from 'react';
import Text from '../Paragraphs/text';
import ReactComponent from '../Paragraphs/reactComponent';

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
              {paragraphItem.__typename === 'paragraph__text' ? 
                  <Text 
                    header={paragraphItem.field_header}
                    content={paragraphItem.field_text.processed} 
                  />
                : paragraphItem.__typename === 'paragraph__react_component' ?
                  paragraphItem.relationships.field_components.map((reactItem, index) => (
                    <ReactComponent 
                      key={reactItem.id}
                      content={reactItem.drupal_internal__tid}
                    />
                  ))
                : ''
              }
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Page;