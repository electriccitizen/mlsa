import React from 'react';
import PDF from '../../images/pdf.svg';
import Word from '../../images/word.svg';
import Excel from '../../images/excel.svg';
import Powerpoint from '../../images/powerpoint.svg';
import Generic from '../../images/generic.svg';

const File = (props) => {
  return (
    <div className="max-w-2xlHalf mx-auto">
      {props.header && <h2 className="h3 widget-title">{props.header}</h2>}
      <div className={props.content.length > 3 ? 'cs-multi-col' : 'single-col'}>
        {props.content.map((fileItem, index) => (
          <div key={fileItem.drupal_id}>
            <a className="file-link" href={fileItem.relationships.field_media_file.localFile.url} target="_blank" rel="noopener noreferrer">
              <span>
              {String(fileItem.relationships.field_media_file.localFile.extension) === 'pdf' ? <PDF />
                : String(fileItem.relationships.field_media_file.localFile.extension) === 'docx' ? <Word />
                : String(fileItem.relationships.field_media_file.localFile.extension) === 'doc' ? <Word />
                : String(fileItem.relationships.field_media_file.localFile.extension) === 'xlsx' ? <Excel />
                : String(fileItem.relationships.field_media_file.localFile.extension) === 'xls' ? <Excel />
                : String(fileItem.relationships.field_media_file.localFile.extension) === 'pptx' ? <Powerpoint />
                : String(fileItem.relationships.field_media_file.localFile.extension) === 'ppt' ? <Powerpoint />
                : <Generic />
              }
              </span>
              {fileItem.relationships.field_media_file.localFile.name}.{fileItem.relationships.field_media_file.localFile.extension}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
};

export default File;
