import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import { StateFoo } from "../components/StateFoo/StateFoo"

function FooPage() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="max-w-1143 mx-auto px-4 py-8 md:px-7">
        <StateFoo />
      </section>
    </Layout>
  );
}

export default FooPage;
