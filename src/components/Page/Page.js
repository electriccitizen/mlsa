import React from 'react';
//import ParagraphText from '../ParagraphText/ParagraphText';
//import ParagraphImage from '../ParagraphImage/ParagraphImage';
//import ParagraphSection from '../ParagraphSection/ParagraphSection';
//import Hero from '../Hero/Hero';

class Page extends React.Component {

  // renderElement(){
  //   var media;
  //   if (this.props.content) {
  //   return (
  //     <div>
  //       {
  //         this.props.content.map((item, key) => {
  //
  //           // if even, render grey background
  //
  //             if (item.__typename === 'paragraph__text') {
  //               return (
  //                 <ParagraphText
  //                   title={item.__typename}
  //                   text={item.field_text.processed}
  //                   header={item.field_header}
  //                   fx={item.field_special_fx}
  //                 />
  //               );
  //             } else if (item.__typename === 'paragraph__image') {
  //               if (item.relationships.field_single_image) {
  //                 media = item.relationships.field_single_image.relationships.field_media_image
  //               } else {
  //                 media = ''
  //               }
  //               return (
  //                 <ParagraphImage
  //                   title={item.__typename}
  //                   media={media}
  //                   caption={item.field_caption.processed}
  //                   fx={item.field_special_fx}
  //                 />
  //               );
  //             } else if (item.__typename === 'paragraph__section') {
  //               return (
  //                 <ParagraphSection
  //                   title="my section"
  //                   content={item.relationships.field_content}
  //                 />
  //
  //               );
  //             } else {
  //               return null
  //             }
  //
  //         })
  //       }
  //     </div>
  //   );
  //   } else {
  //     return null
  //   }
  //
  //
  // }


  render() {
    return (
      <>
        <h1>{this.props.hero.field_title}</h1>
      {/*  <Hero*/}
      {/*    title={this.props.hero.field_title}*/}
      {/*    subtitle={this.props.hero.field_subheader}*/}
      {/*    color={this.props.hero.field_hero_bg.color}*/}
      {/*    opacity={this.props.hero.field_hero_bg.opacity}*/}
      {/*    heroimage={this.props.hero.relationships.field_hero_image.relationships.field_media_image}*/}
      {/*    hideheadline={this.props.hero.field_hide_headline}*/}
      {/*    buttons={this.props.hero.relationships.field_buttons}*/}
      {/*  />*/}
      {/*{ this.renderElement() }*/}
      </>
    )
  }
}



export default withStyles(styles)(Page);