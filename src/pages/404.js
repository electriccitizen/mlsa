import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          src={abductionIllustration}
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
      </div>
    </Layout>
  );
}

export default NotFoundPage;
