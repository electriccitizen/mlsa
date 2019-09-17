import React from 'react';

const File = (props) => {
  return (
    <div className="max-w-2xlHalf mx-auto">
      {props.header && <h2 className="h3 widget-title">{props.header}</h2>}
      <div className={props.content.length > 3 ? 'cs-multi-col' : 'single-col'}>
        {props.content.map((fileItem, index) => (
          <div key={fileItem.drupal_id}>
            <a className={`file ${fileItem.relationships.field_media_file.localFile.extension}`} href={fileItem.relationships.field_media_file.localFile.url} target="_blank" rel="noopener noreferrer">{fileItem.relationships.field_media_file.localFile.name}.{fileItem.relationships.field_media_file.localFile.extension}</a>
          </div>
        ))}
      </div>
    </div>
  )
};

export default File;
