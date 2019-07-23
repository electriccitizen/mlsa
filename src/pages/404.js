import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import AbductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <h1>Page not found!</h1>
        <AbductionIllustration className="block mx-auto w-1/2" />
        <p className="text-center text-22">Oh no—You've taken somewhere bad.</p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
