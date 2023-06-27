import React from "react";
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby";

const MainMenu = () => {


  const mMenu = useStaticQuery(graphql`
query mainMenu {
  allTaxonomyTermMainMenu(sort: {weight: ASC}) {
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
    <nav className="font-header font-extrabold uppercase border-b-4 border-green border-l border-r md:border-0 md:w-full md:flex md:justify-end">
      {mMenu.allTaxonomyTermMainMenu.edges.map(({ node }) => (
        <div key={node.id} className="main-link">
          {String(node.field_menu_link.uri).includes('internal') ? <Link to={node.field_alias} className="hover:underline focus:underline">{node.name}</Link>
            : String(node.field_menu_link.uri).includes('entity') ? <Link to={node.field_alias} className="hover:underline focus:underline">{node.name}</Link>
            : <a href={node.field_menu_link.uri} target="_blank" rel="noopener noreferrer" className="hover:underline focus:underline">{node.name}</a>}
        </div>
      ))}
    </nav>
  )
}

export default MainMenu;