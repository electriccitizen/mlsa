import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

function NotFoundPage() {
  const lostPage = useStaticQuery(graphql`query lostPage {
  imageOne: file(relativePath: {eq: "montana-road.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        height: 350
        transformOptions: {fit: COVER}
        layout: FULL_WIDTH
      )
    }
  }
}`)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="px-4 py-8 md:px-7">
        <h1>Page not found!</h1>
        <h2 className="text-center">Looks like you've taken a wrong turn.</h2>
        <div className="mx-auto mb-12 max-w-2xlHalf">
          <GatsbyImage
            image={lostPage.imageOne.childImageSharp.gatsbyImageData}
            className="mb-6"
            alt="Road into Montana foothills" />
          <p>Please use the main navigation, search for a resource in the <Link to="/resource-library">resource library</Link>, or use our <Link to="/find-help#step-1">help tool</Link> to find the content you were looking for</p>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;

