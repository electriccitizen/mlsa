import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import ResourceLibrary from "../components/ResourceLibrary/ResourceLibrary";

const searchIndices = [
  { name: `Resources`, title: `Resources`, hitComp: `ResourceHit` },
]

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="max-w-1143 mx-auto px-4 py-8 md:px-7">
        <ResourceLibrary collapse indices={searchIndices} />
      </section>
    </Layout>
  );
}
export default IndexPage;
