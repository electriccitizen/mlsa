import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import HomeIntro from '../components/Block/home-intro';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="text-center md:justify-center">
        <h1 className="visually-hidden">Find Help for Victims of Crime in Montana</h1>
        <HomeIntro />
      </section>
    </Layout>
  );
}

export default IndexPage;
