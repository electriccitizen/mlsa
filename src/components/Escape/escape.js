import React from 'react'
import 'react-tippy/dist/tippy.css'
import { Tooltip, } from 'react-tippy';

class Escape extends React.Component {

  constructor(props) {
    super(props);
    if (typeof document !== `undefined`) {
      // check for session cookie
      if (document.cookie.split(';').filter((item) => item.trim().startsWith('new=')).length) {
        this.trigger = false
      } else {
        this.trigger = true
      }
    } else {
      this.trigger = false
    }
      // set the initial state for tooltip
      this.state = {
        open: this.trigger,
      }
      this.setIsOpen = this.setIsOpen.bind(this)
    if (typeof document !== `undefined`) {
      // set a session cookie for new users
      document.cookie = "new=1";
    }
  }

  setIsOpen = (option) => {
    this.setState({
      open: option
    });
  }

  handleClick = () => {
    let stateObj = {
      foo: "bar",
    };

    if (typeof window !== `undefined`) {
      // obfustacate the back button when a user hits escape
      window.history.pushState(stateObj, "Google.com", "redirect")
      window.location.href = 'https://google.com';
    }
  }

  render() {
    return (
        <Tooltip
          // options
          title="Safe Browsing"
          animation="perspective"
          hideDelay="3000"
          duration="1000"
          position="bottom"
          distance="30"
          arrow="true"
          interactive="true"
          theme="light"
          open={this.state.open}
          html={(
            <div style={{ width: 200, textAlign: 'left' }}>
              <p>
              <strong>SAFE BROWSING:</strong> Click this button to escape this site.
              See our <a style={{color: 'blue'}} href="/safe-browsing">safe browsing tips</a>
                here.
              </p>
              <button className="block bg-blue border border-white flex items-center px-2 py-1 rounded text-white" onClick={() => {this.setIsOpen(false)}}>Got it</button>
            </div>
          )}
        >
        <button
         onClick={this.handleClick}
         className = "mr-16 bg-blue-dark hover:bg-blue text-white font-bold py-2 px-4 inline-flex items-center" >
          Escape

          <svg className="fill-current text-white w-5 h-5 mr-2 ml-2"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0  20" enableBackground="new 0 0 20 20" >
            <path d="M14,10L8,5v3H1v4h7v3L14,10z M17,17H9v2h8c1.1,0,2-0.9,2-2V3c0-1.1-0.9-2-2-2H9v2h8V17z"/>
          </svg>
        </button>
        </Tooltip>
    );
  }
}

export default Escape
