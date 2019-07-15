import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Escape from '../Escape/escape';
import TransIcon from '../../images/g-translate.svg';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
    <header className="bg-pineWhite">
      <Escape className="escape-btn" />
      <button className="border-black border-l-0 border-t border-b border-r trans-button hover:opacity-75 focus:opacity-75 md:border-0">
        <TransIcon className="fill-current text-black opacity-50 w-10 h-10" />
      </button>
      <nav>
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
          <Link to="/" className="flex items-center no-underline">
            <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
          </Link>

          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
          >

            <div className="text-sm">
              <Link
                to="/"
                className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text"
              >
               Find Help
              </Link>

              <Link
                to="/"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text"
              >
                Resources
              </Link>

              <Link
                to="/"
                className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text"
              >
               About Us
              </Link>
              <Link
                to="/"
                className="block md:inline-block mt-4 md:mt-0 no-underline text"
              >
               FAQs
              </Link>

            </div>

          </div>

        </div>
      </nav>
    </header>
    </>

  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
