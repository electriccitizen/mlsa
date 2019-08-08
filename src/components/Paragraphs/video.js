import React from 'react';

const VideoEmbed = ({ videoURL, ...props }) => (
  <div className="video">
    <iframe
      src={videoURL}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

const Video = (props) => {
  return (
    <div className="max-w-1080 mx-auto">
      {props.header && <h2 className="h3">{props.header}</h2>}
      <div>
        <VideoEmbed videoURL={props.content} />
      </div>
    </div>
  )
};

export default Video;