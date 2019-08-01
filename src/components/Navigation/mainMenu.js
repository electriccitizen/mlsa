import React from "react";
import { Link } from 'gatsby';
//import { useStaticQuery, graphql } from "gatsby";

const MainMenu = () => {

  /*
  const mMenu = useStaticQuery(graphql`
    query mainMenu {
      allTaxonomyTermMainMenu(sort: {fields: weight, order: ASC}) {
        edges {
          node {
            id
            name
            field_menu_link {
              uri
            }
          }
        }
      }
    }
  `)
  */

  return (
    <nav className="font-header font-extrabold uppercase border-b-4 border-green border-l border-r md:border-0 md:w-full md:flex md:justify-end">
      <Link to="/" className="main-link">Find Help</Link>
      <Link to="/" className="main-link">Resources</Link>
      <Link to="/" className="main-link">About Us</Link>
      <Link to="/" className="main-link">FAQs</Link>
    </nav>
  )
}

export default MainMenu;