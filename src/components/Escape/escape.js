import React from 'react'
import 'react-tippy/dist/tippy.css'
import {
  Tooltip,
} from 'react-tippy';


class Escape extends React.Component {


  handleClick = () => {
    let stateObj = {
      foo: "bar",
    };

    window.history.pushState(stateObj, "Google.com", "redirect");
    window.location.href = 'https://google.com';
  }

  render() {
    // window.onload = function() {
    //   alert('foo')
    // }
    return (
      <>
        <Tooltip
          // options
          title="Safe Browsing"
          animation="perspective"
          hideDelay="3000"
          duration="1000"
          position="bottom"
          distance="30"
          arrow="true"
          sticky="true"
          interactive="true"
          theme="light"
          html={(
            <div style={{ width: 200, textAlign: 'left' }}>
              <p>
              <strong>SAFE BROWSING:</strong> Click this button to escape this site.
              See our <a style={{color: 'blue'}} href="/safe-browsing">safe browsing tips</a> here.
              </p>
              </div>
          )}
        >


          <button
            onClick={this.handleClick}
            className = "mr-16 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 inline-flex items-center" >
            Escape
            <svg className="fill-current text-white w-5 h-5 mr-2 ml-2"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0  20" enable-background="new 0 0 20 20" >
                 <path d="M14,10L8,5v3H1v4h7v3L14,10z M17,17H9v2h8c1.1,0,2-0.9,2-2V3c0-1.1-0.9-2-2-2H9v2h8V17z"/>
            </svg>
          </button>
        </Tooltip>

        </>
    );
  }
}

export default Escape
