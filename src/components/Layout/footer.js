import PropTypes from "prop-types";
import React from "react";
//import Partners from '../Block/partner-orgs';
import Social from '../Block/social';
import FooterMenu from '../Navigation/footer-menu';
import FooterAbout from '../Block/footer-about';
import Copyright from '../Block/copyright';

function Footer() {

  return (
    <footer>
      <div>
        <Social />
        <FooterMenu /> 
        <Copyright />
      </div>
      <div>
        <FooterAbout />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;





