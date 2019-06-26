import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";

function SafeBrowsingPage() {
  return (
    <Layout>
      <SEO
        title="Safe Browsing"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
       <h1>Safe Browsing Tips</h1>
      <p>Placeholder page for safe browsing information (clearing browser history, private mode, etc.)</p>
    </Layout>
  );
}

export default SafeBrowsingPage;
