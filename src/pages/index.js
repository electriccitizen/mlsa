import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import HomeResources from "../components/Block/home-resources"

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section>
        <HomeResources />
      </section>
    </Layout>
  );
}

export default IndexPage;
