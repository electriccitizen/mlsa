import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import { Triage } from "../components/Triage/Triage"

function FindHelpPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="max-w-1143 mx-auto px-4 py-8 md:px-7">
        <h1>Find Help</h1>
        <Triage />
      </section>
    </Layout>
  );
}

export default FindHelpPage;
