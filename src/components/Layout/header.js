import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Escape from '../Escape/escape';
import TransIcon from '../../images/g-translate.svg';
import HamburgerIcon from '../../images/hamburger.svg';
import CloseIcon from '../../images/close-x.svg';
import Logo from '../../images/logo.svg';
import Helmet from "react-helmet";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
    <Helmet>
      <link href="https://use.typekit.net" rel="preconnect" crossorigin />
    </Helmet>
    <header className="bg-pineWhite site-header">
      <div className="flex flex-row flex-wrap relative content-start md:justify-end m-auto max-w-1080px">
        <Escape />
        <button className="border-grey-mid border-l-0 border-b border-r trans-button hover:opacity-75 focus:opacity-75 md:border-0 md:order-1">
          <TransIcon className="fill-current text-grey w-7 h-7" />
        </button>
          
        <div className="md:hidden m-menu-toggle border-b border-grey-mid flex flex-auto justify-center xs:justify-end">
          <button
            className="font-header font-bold uppercase text-blue flex items-center py-2 xs:px-6 leading-none hover:text-green-dark focus:text-green-dark"
            onClick={() => toggleExpansion(!isExpanded)}
            aria-expanded={ String(`${isExpanded ? `true` : `false`}`)}
            aria-controls="mainNavigation" 
          >
            Menu
            { isExpanded ? <CloseIcon className="fill-current h-10 w-10 ml-4" /> : <HamburgerIcon className="fill-current h-10 w-10 ml-4" /> }
          </button>
        </div>

        <div
          id="mainNavigation" 
          className={`${
            isExpanded ? `open` : `closed`
          } bg-white w-full absolute inset-x-0 m-menu-wrapper md:bg-transparent md:static md:pr-2 md:flex md:order-3 md:items-center md:pt-4 cmax:pr-0 cmax:-mr-3`}
          aria-hidden={ String(`${isExpanded ? `true` : `false`}`)}
        >

          <nav className="font-header font-extrabold uppercase border-b-4 border-green border-l border-r md:border-0 md:w-full md:flex md:justify-end">
            
            <Link to="/" className="main-link">Find Help</Link>
            <Link to="/resources" className="main-link">Resources</Link>
            <Link to="/" className="main-link">About Us</Link>
            <Link to="/" className="main-link">FAQs</Link>

          </nav>

        </div>

        <div className="w-full py-8 md:absolute md:py-6 md:px-20px md:left-0 md:top-0 md:w-auto cmax:pl-0">
          <Link to="/" className="block w-56 m-auto hover:opacity-75 focus:opacity-75">
            <Logo />
            <span className="visually-hidden">{siteTitle}</span>
          </Link>
        </div>
      </div>
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
