import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Escape from '../Escape/escape';
import TransIcon from '../../images/g-translate.svg';
import HamburgerIcon from '../../images/hamburger.svg';
import CloseIcon from '../../images/close-x.svg';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
    <header className="bg-pineWhite flex flex-row flex-wrap relative">
      <Escape className="escape-btn" />
      <button className="border-grey-mid border-l-0 border-b border-r trans-button hover:opacity-75 focus:opacity-75 md:border-0">
        <TransIcon className="fill-current text-black opacity-50 w-10 h-10" />
      </button>
        
      <div className="md:hidden m-menu-toggle border-b border-grey-mid flex flex-auto justify-center xs:justify-end">
        <button
          className="font-header font-bold uppercase text-blue flex items-center py-2 px-6 leading-none"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          Menu
          {
            isExpanded ? <CloseIcon className="fill-current h-10 w-10 ml-4" /> 
            : 
            <HamburgerIcon className="fill-current h-10 w-10 ml-4" />
          }
          
          
        </button>
      </div>

      <div
        className={`${
          isExpanded ? `open` : `closed`
        } bg-white md:block md:flex md:items-center w-full md:w-auto absolute inset-x-0 m-menu-wrapper`}
      >

        <nav className="font-header font-black uppercase border-b-4 border-green border-l border-r">
          <Link
            to="/"
            className="main-link"
          >
           Find Help
          </Link>

          <Link
            to="/"
            className="main-link"
          >
            Resources
          </Link>

          <Link
            to="/"
            className="main-link"
          >
           About Us
          </Link>
          <Link
            to="/"
            className="main-link"
          >
           FAQs
          </Link>

        </nav>

      </div>

      <Link to="/" className="flex items-center no-underline">
        <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
      </Link>

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
