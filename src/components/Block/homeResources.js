import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Advocate from '../../images/advocate.svg';
import Database from '../../images/database.svg';
import Learn from '../../images/learn.svg';
import Question from '../../images/question.svg';
import Search from '../../images/search.svg';
import Toolbox from '../../images/toolbox.svg';

const HomeResources = () => {

  const resources = useStaticQuery(graphql`
    query resources {
      allTaxonomyTermResourceTypes(sort: {fields: weight, order: ASC}, filter: {drupal_internal__tid: {ne: 273}}) {
        edges {
          node {
            id
            field_icon
          }
        }
      }
      allBlockContentHomepageResources(filter: {drupal_internal__id: {eq: 7}}) {
        edges {
          node {
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
    resources.allBlockContentHomepageResources.edges.map(({ node }) => (
      <div className="flex flex-row flex-wrap items-center relative home-resources py-10 mb-10 lg:mb-16" id={ `block-${node.drupal_internal__id}`} key={node.drupal_internal__id}>
        <div className="w-full order-2 md:order-1 md:w-1/2 md:order-1 md:pr-16">
          <ul className="flex flex-row flex-wrap justify-center max-w-xxs m-auto md:-mb-8">
            {resources.allTaxonomyTermResourceTypes.edges.map(({ node }) => (
              <li className={`block w-1/3 mb-8 ${node.field_icon}`} key={node.id}>
                <span className="visually-hidden">{node.field_icon}</span>
                {String(node.field_icon) === 'advocate' ? <Advocate className="w-16 w-18 m-auto" />
                : String(node.field_icon) === 'database' ? <Database className="w-16 w-18 m-auto" />
                : String(node.field_icon) === 'learn' ? <Learn className="w-16 w-18 m-auto" />
                : String(node.field_icon) === 'question' ? <Question className="w-16 w-18 m-auto" />
                : String(node.field_icon) === 'search' ? <Search className="w-16 w-18 m-auto" />
                : String(node.field_icon) === 'toolbox' ? <Toolbox className="w-16 w-18 m-auto" />
                : '' }
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 w-full text-center md:order-1 md:w-1/2 md:order-2 md:text-left">
          <h2 className="mb-3">{node.info}</h2>
          <div className="pb-2" dangerouslySetInnerHTML={{ __html: node.body.processed}} />
          <Link className="btn btn-arrow mb-10 md:mb-0 md:ml-0 ml-wipe" to="/resources">Resources</Link>
        </div>
      </div>
    ))
  )
}

export default HomeResources;