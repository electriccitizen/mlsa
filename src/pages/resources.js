import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import Search from "../components/Search/search";


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
      <section>
        <Search collapse indices={searchIndices} />
      </section>
    </Layout>
  );
}

export default IndexPage;
