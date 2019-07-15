import React from 'react';
import 'react-tippy/dist/tippy.css';
import { Link } from "gatsby";
import { Tooltip, } from 'react-tippy';
import EscapeIcon from '../../images/exit_to_app_24px.svg';

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
            <div className="text-left py-6 px-4">
              <p className="text-black text-15"><strong className="block mb-1 text-16">SAFE BROWSING:</strong>Click this button to escape this site. See our <Link to="/safe-browsing">safe browsing tips</Link>&nbsp;here.
              </p>
              <button className="btn text-13" onClick={() => {this.setIsOpen(false)}}>Got it</button>
            </div>
          )}
        >
          <button
            onClick={this.handleClick}
            className = "btn font-black inline-flex items-center relative w-32 h-16 md:order-3 md:h-12 md:w-38 md:h-auto tracking-normal" >
            Escape
            <EscapeIcon className="text-white fill-current absolute esc-position" />
          </button>
        </Tooltip>
    );
  }
}

export default Escape
