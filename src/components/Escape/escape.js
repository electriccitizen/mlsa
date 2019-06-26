import React from 'react'
//import Tooltip from "react-simple-tooltip"
import 'react-tippy/dist/tippy.css'
import {
  Tooltip,
} from 'react-tippy';


class Escape extends React.Component {


  handleClick = () => {
    window.location.href = 'https://google.com';
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  setIsOpen = (option) => {
    this.setState({
      open: option
    });
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
              See our <a style={{color: 'blue'}} href="#">safe browsing tips</a> here.
              </p>
              </div>
          )}
        >
          <button
            onClick={this.handleClick}
            className = "bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4" >
            Escape
          </button>
        </Tooltip>

        </>
    );
  }
}

export default Escape
