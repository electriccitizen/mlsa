import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Partners from '../Block/partnerOrgs';
import Social from '../Block/social';
import FooterMenu from '../Navigation/footerMenu';
import Landscape from '../../images/landscape.svg'
import BasicBlock from '../Block/basicBlock';

function Footer() {

  const basic = useStaticQuery(graphql`
    query basicBlock{
      allBlockContentBasic {
        edges {
          node {
            drupal_id
            drupal_internal__id
            info
            body {
              processed
            }
          }
        }
      }
    }
  `)

  return (
    <footer className="site-footer">
      <Partners />
      <div className="m-auto max-w-1080">
        <div className="mx-4 border-t border-grey-mid pt-8 md:flex md:flex-row md:mx-5 cmax:mx-0 cmax:px-5">
          <div className="md:w-1/2 md:pr-6 lg:pr-16">
            <Social />
            <FooterMenu /> 
            {basic.allBlockContentBasic.edges.map(({ node }) => (
              node.drupal_internal__id === 1 &&
              <BasicBlock
                id={node.drupal_internal__id}
                body={node.body}
                classes="text-black text-center text-16 md:text-left lg:text-18 lg:text-grey-dark"
                key={node.drupal_id}
              />
            ))}
          </div>
          <div className="md:w-1/2 md:pl-6 lg:pl-16">
            {basic.allBlockContentBasic.edges.map(({ node }) => (
              node.drupal_internal__id === 2 &&
              <BasicBlock
                id={node.drupal_internal__id}
                body={node.body}
                key={node.drupal_id}
              />
            ))}
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





