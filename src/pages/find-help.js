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
      <section className="flex flex-col md:flex-row items-center">
        <Triage />
      </section>
    </Layout>
  );
}

export default FindHelpPage;
