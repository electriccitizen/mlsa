import PropTypes from "prop-types";
import React from "react";
import Partners from '../Block/partner-orgs';
import Social from '../Block/social';
import FooterMenu from '../Navigation/footer-menu';
import FooterAbout from '../Block/footer-about';
import Copyright from '../Block/copyright';
import Landscape from '../../images/landscape.svg'

function Footer() {

  return (
    <footer className="site-footer">
      <Partners />
      <div className="m-auto max-w-1080">
        <div className="mx-4 border-t border-grey-mid pt-8 md:flex md:flex-row md:mx-5 cmax:mx-0 cmax:px-5">
          <div className="md:w-1/2 md:pr-6 lg:pr-16">
            <Social />
            <FooterMenu /> 
            <Copyright />
          </div>
          <div className="md:w-1/2 md:pl-6 lg:pl-16">
            <FooterAbout />
          </div>
        </div>
      </div>
      <Landscape className="landscape" />
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





