import React from "react";
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby";


const FooterMenu = () => {

  const fMenu = useStaticQuery(graphql`
    query footerMenu {
      allTaxonomyTermFooterMenu(sort: {fields: weight, order: ASC}) {
        edges {
          node {
            id
            name
            field_alias
            field_menu_link {
              uri
            }
          }
        }
      }
    }
  `)

  return (
    <nav className="text-center mb-4 md:text-left">
      {fMenu.allTaxonomyTermFooterMenu.edges.map(({ node }) => (
        <div key={node.id} className="footer-menu-item">
          {String(node.field_menu_link.uri).includes('internal') ? <Link to={node.field_alias}>{node.name}</Link>
            : String(node.field_menu_link.uri).includes('entity') ? <Link to={node.field_alias}>{node.name}</Link>
            : <a href={node.field_menu_link.uri} target="_blank" rel="noopener noreferrer">{node.name}</a>}
        </div>
      ))}
    </nav>
  )
}

export default FooterMenu;