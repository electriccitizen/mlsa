import React from "react"
import PropTypes from "prop-types"


export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>

        <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{__html: `
            window.__lc = window.__lc || {};
            window.__lc.license = 7515341;
            (function() {
              var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
              lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
            })();
          `,}}
        />
        <noscript>
          <a href="https://www.livechatinc.com/chat-with/7515341/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
        </noscript>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
