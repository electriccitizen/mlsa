import React from "react";
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby";


const FooterMenu = () => {

  const fMenu = useStaticQuery(graphql`
    query footerMenu {
      allTaxonomyTermFooterMenu(sort: {fields: weight, order: ASC}) {
        edges {
          node {
            name
            field_menu_link {
              uri
            }
          }
        }
      }
    }
  `)

  return (
    <nav>
      {fMenu.allTaxonomyTermFooterMenu.edges.map(({ node }) => (
        <li key={node.id}><Link to={node.field_menu_link.uri}>{node.name}</Link></li>
      ))}
    </nav>
  )
}

export default FooterMenu;