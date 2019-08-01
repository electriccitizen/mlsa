import React from 'react';
import Text from '../Paragraphs/text';
import ReactComponent from '../Paragraphs/reactComponent';
import Img from 'gatsby-image';

class Page extends React.Component {

  render() {
    return (
      <>
        <section className="max-w-1143 mx-auto px-4 py-8 md:px-7">
          {/* Hide headder and subheader from home page */}
          {this.props.info.drupal_internal__nid !== 21 &&
            <div className="text-center">
              <h1>{this.props.header.field_title}</h1>
              <h2 className="mx-auto max-w-3xl">{this.props.header.field_subheader}</h2>
            </div>
          }
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
        </section>
        <section className="max-w-2280 mx-auto">
          <div className="prefooter-wrapper">
            <Img fluid={this.props.prefooter.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.fluid} alt={this.props.prefooter.relationships.field_single_image.field_media_image.alt} />
          </div>
        </section>
      </>
    )
  }

}

export default Page;
