import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Facebook from '../../images/facebook.svg';
import Youtube from '../../images/youtube.svg';
import Linkedin from '../../images/linkedin.svg';
import Twitter from '../../images/twitter.svg';

const Social = () => {

  const social = useStaticQuery(graphql`
    query Social {
      allBlockContentSocialMediaLinks(filter: {drupal_internal__id: {eq: 3}}, sort: {fields: field_social_links, order: ASC}) {
        edges {
          node {
            drupal_internal__id
            field_social_links {
              uri
            }
          }
        }
      }
    }
  `)

  return (    
    social.allBlockContentSocialMediaLinks.edges.map(({ node }) => (
      <ul className="flex flex-row justify-center">
        {node.field_social_links.map((socialLink, index) => (
          <li className="px-1">
            <a className="block w-48 h-48 hover:opacity-75 focus:opacity-75 mb-8" href={socialLink.uri} target="_blank" rel="noopener noreferrer">
              {String(socialLink.uri).includes('facebook') ? <Facebook className="text-facebook fill-current" />
              : String(socialLink.uri).includes('youtube') ? <Youtube />
              : String(socialLink.uri).includes('linkedin') ? <Linkedin />
              : String(socialLink.uri).includes('twitter') ? <Twitter />
              : 'No Icon Available' }
            </a>
          </li>
        ))}
      </ul>
    ))
  )
}

export default Social;