import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import TransIcon from '../../images/g-translate.svg';
import SelectElement from '../Forms/select'
import CloseX from '../../images/close-x.svg';

const TranslationPopup = () => {

  const translationBlock = useStaticQuery(graphql`
    query TranslationBlock {
      blockContentTranslatedBlock(drupal_internal__id: {eq: 9}) {
        drupal_internal__id
        body {
          processed
        }
        relationships {
          field_translations {
            field_text {
              processed
            }
            relationships {
              field_language {
                name
                drupal_internal__tid
              }
            }
            id
          }
        }
      }
    }
  `)

  const english = {'value':101, 'label':'English'};

  const languages = translationBlock.blockContentTranslatedBlock.relationships.field_translations.map(function(val) {
    return {
      value: val.relationships.field_language.drupal_internal__tid,
      label: val.relationships.field_language.name
    };
  });

  languages.unshift(english);

  const [selected, setSelected] = useState('');
  const [help, setHelp] = useState(false);

  // Button Click Handler
  const handleClick = () => {
    setHelp(help === false ? true : false)
  };
  // Select Change handler
  const handleChange = selectedOption => {
    setSelected(selectedOption)
  };

  const englishText = <div className="my-4" dangerouslySetInnerHTML={{ __html: translationBlock.blockContentTranslatedBlock.body.processed}} />;

  return (
    <div className={`relative${help ? ' trans-arrow' : ''}`}> 
      <button className="border-grey-mid h-full border-l-0 border-b border-r trans-button hover:opacity-75 focus:opacity-75 md:border-0 md:order-1" onClick={handleClick}>
        <TransIcon className="fill-current text-grey w-7 h-7" />
      </button>
      {help &&
        <div key={translationBlock.blockContentTranslatedBlock.drupal_internal__id} id={ `block-${translationBlock.blockContentTranslatedBlock.drupal_internal__id}`} className="trans-help">
          <button className="absolute top-0 right-0 p-1 hover:opacity-50" onClick={handleClick}>
            <CloseX />
          </button>
          <SelectElement classes="max-w-xs mt-4" name="languages" selected={selected} options={languages} placeholder="Select Preferred Language" onChange={handleChange}/>
          {selected.value === 101 ? englishText
            : selected !== '' ? translationBlock.blockContentTranslatedBlock.relationships.field_translations.map((trans, index) =>(
                trans.relationships.field_language.drupal_internal__tid === selected.value &&
                  <div className="mt-4" key={index} dangerouslySetInnerHTML={{ __html: trans.field_text.processed}} />
              ))
            : englishText
          }
          <a href="https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en-GB" target="_blank" rel="noopener noreferrer" className="btn inline-block mb-4 text-13">Install Chrome</a>
        </div>
      }
    </div>
  )
}

export default TranslationPopup;
