import React from 'react';

const VideoEmbed = ({ videoURL, videoName, ...props }) => (
  <div className="video-holder">
    <iframe
      src={videoURL}
      title={videoName}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      width="100%"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  </div>
)


const Video = (props) => {

  let videoSrc = String(props.video).includes('youtube.com/watch?v=') ? String(props.video).replace('youtube.com/watch?v=','youtube.com/embed/') 
    : String(props.video).includes('https://vimeo.com/') ? String(props.video).replace('https://vimeo.com/','https://player.vimeo.com/video/')
    : props.video;

  return (
    <div className="max-w-1080 mx-auto">
      {props.header && <h2 className="h3 widget-title">{props.header}</h2>}
      <div>
        <VideoEmbed videoURL={videoSrc} videoName={props.name} />
      </div>
    </div>
  )
};

export default Video;