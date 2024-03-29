import React from 'react';
import 'react-tippy/dist/tippy.css';
import { Link } from "gatsby";
import { Tooltip, } from 'react-tippy';
import EscapeIcon from '../../images/exit-app.svg';

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
      window.location.href = `https://www.google.com/search?source=hp&q=${this.props.search}&oq=${this.props.search}`;
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
          className="md:order-2"
          open={this.state.open}
          html={(
            <div className="text-left py-6">
              <div className="text-black text-15" dangerouslySetInnerHTML={{ __html: this.props.text}} />
              <button className="btn text-13 mr-3 mb-2 inline-block" onClick={() => {this.setIsOpen(false)}}>Got it</button>
              {String(this.props.linkurl).includes('http') ? <a href={this.props.linkurl} rel="noopener noreferrer" target="_blank" aria-label="Learn more about Safe Browsing" className="btn text-13 btn-alt inline-block mb-2">Learn More</a>
                : String(this.props.linkurl) === '/user' ? <Link to="/" aria-label="Learn more about Safe Browsing" className="btn text-13 btn-alt inline-block mb-2">Learn More</Link>
                : <Link to={this.props.linkurl} aria-label="Learn more about Safe Browsing" className="btn text-13 btn-alt inline-block mb-2">Learn More</Link>
              }
            </div>
          )}
        >
          <button
            onClick={this.handleClick}
            className = "btn font-extrabold inline-flex items-center relative w-32 h-16 md:order-3 md:h-12 md:w-38 md:h-auto tracking-normal" >
            Escape
            <EscapeIcon className="text-white fill-current absolute esc-position" />
          </button>
        </Tooltip>
    );
  }
}

export default Escape
