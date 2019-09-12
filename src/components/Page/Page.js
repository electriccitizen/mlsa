import React from 'react';
import Accordions from '../Paragraphs/accordions';
import Button from '../Paragraphs/button';
import Image from '../Paragraphs/image';
import Text from '../Paragraphs/text';
import TextImage from '../Paragraphs/textImage';
import Video from '../Paragraphs/video';
import ReactComponent from '../Paragraphs/reactComponent';
import Img from 'gatsby-image';

class Page extends React.Component {

  render() {
    return (
      this.props.restricted ? <div className="text-center py-12">You must be logged in as an administrator to view this page.</div> 
        :
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
                <div key={paragraphItem.drupal_id} className="paragraph-item">
                  {paragraphItem.__typename === 'paragraph__accordion_group' ? 
                      <Accordions 
                        header={paragraphItem.field_header}
                        content={paragraphItem.relationships.field_accordions} 
                      />
                    : paragraphItem.__typename === 'paragraph__button' ?
                      <Button
                        header={paragraphItem.field_header}
                        content={paragraphItem.field_buttons}
                      />
                    : paragraphItem.__typename === 'paragraph__horizontal_rule' ?
                      <hr className="border-t border-mid-grey mx-auto max-w-2xlHalf" />
                    : paragraphItem.__typename === 'paragraph__image' ?
                      <Image
                        header={paragraphItem.field_header}
                        image={paragraphItem.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.fluid}
                        label={paragraphItem.field_link ? paragraphItem.field_link.title : ''}
                        alt={paragraphItem.relationships.field_single_image.field_media_image.alt}
                        link={paragraphItem.field_link ? paragraphItem.field_link.alias : ''}
                        caption={paragraphItem.relationships.field_single_image.field_caption}
                      />
                    : paragraphItem.__typename === 'paragraph__react_component' ?
                      <ReactComponent 
                        content={paragraphItem.relationships.field_components.drupal_internal__tid}
                      />
                    : paragraphItem.__typename === 'paragraph__text' ?
                      <Text 
                        header={paragraphItem.field_header}
                        content={paragraphItem.field_text.processed} 
                      />
                    : paragraphItem.__typename === 'paragraph__text_with_image' ?
                      <TextImage
                        header={paragraphItem.field_header}
                        text={paragraphItem.field_text.processed}
                        image={paragraphItem.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.fluid}
                        alt={paragraphItem.relationships.field_single_image.field_media_image.alt}
                        label={paragraphItem.field_link ? paragraphItem.field_link.title : ''}
                        link={paragraphItem.field_link ? paragraphItem.field_link.alias : ''}
                        caption={paragraphItem.relationships.field_single_image.field_caption}
                        placement={paragraphItem.field_image_placement}
                      />
                    : paragraphItem.__typename === 'paragraph__video' ?
                      <Video
                        header={paragraphItem.field_header}
                        name={paragraphItem.relationships.field_video.name}
                        video={paragraphItem.relationships.field_video.field_media_oembed_video}
                      />
                    : ''
                  }
                </div>
              ))}
            </div>
          </section>
          <section className="max-w-2280 mx-auto">
            <div className="prefooter-wrapper">
              {this.props.prefooter.relationships ? <Img fluid={this.props.prefooter.relationships.field_single_image.relationships.field_media_image.localFile.childImageSharp.fluid} alt={this.props.prefooter.relationships.field_single_image.field_media_image.alt} /> : ''}
            </div>
          </section>
        </>
    )
  }

}

export default Page;
