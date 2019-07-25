import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import HomeFeatured from '../components/Block/home-featured';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="text-center  md:justify-center">
        <HomeFeatured />
      </section>
    </Layout>
  );
}

export default IndexPage;
