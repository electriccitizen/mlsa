import PropTypes from "prop-types";
import React from "react";

function Footer() {

  return (
    <footer className="bg-gray-700">
      <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-white">
      Footer
      </p>
      </nav>
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





