import { useStaticQuery, graphql } from "gatsby"

export const allInitial = () => {
  const { allTaxonomyTermTriageQuestions } = useStaticQuery(
    graphql`
      query TermInitial {
        allTaxonomyTermTriageQuestions {
          edges {
            node {
              drupal_id
              name
            }
          }
        } 
      }
    `
  )
  return allTaxonomyTermTriageQuestions
}