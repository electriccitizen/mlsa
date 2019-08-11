import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import  FindHelp  from "../components/FindHelp/FindHelp"

const searchIndices = [
  { name: `Resources`, title: `Resources`, hitComp: `ResourceHit` },
]


function FindHelpPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <h1>Find Automated Help</h1>
      <section className="max-w-1143 mx-auto px-4 py-8 md:px-7">
        <FindHelp collapse indices={searchIndices} />
      </section>
    </Layout>
  );
}

export default FindHelpPage;
