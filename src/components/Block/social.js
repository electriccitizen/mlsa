import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Social = () => {

  const social = useStaticQuery(graphql`
    query Social {
      allBlockContentSocialMediaLinks(filter: {drupal_internal__id: {eq: 3}}) {
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
      <ul>
        {node.field_social_links.map((socialLink, index) => (
          <li>
            <a href={socialLink.uri} target="_blank" rel="noopener noreferrer">
              {String(socialLink.uri).includes('facebook') ? <FontAwesomeIcon icon={faFacebookSquare} title="Facebook" />
              : String(socialLink.uri).includes('youtube') ? <FontAwesomeIcon icon={faYoutubeSquare} title="YouTube" />
              : String(socialLink.uri).includes('linkedin') ? <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
              : String(socialLink.uri).includes('twitter') ? <FontAwesomeIcon icon={faTwitterSquare} title="Twitter" />
              : 'No Icon Available' }
            </a>
          </li>
        ))}
      </ul>
    ))
  )
}

export default Social;