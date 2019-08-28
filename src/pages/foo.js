import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";

const searchIndices = [
  { name: `Resources`, title: `Resources`, hitComp: `ResourceHit` },
]


function FooPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
    </Layout>
  );
}

export default FooPage;
