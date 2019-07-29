import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import HomeIntro from "../components/Block/home-intro";
import HomeResources from "../components/Block/home-resources";
import HomeFeatured from '../components/Block/home-featured';
import HomePrefooter from "../components/Block/home-prefooter";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="max-w-1143 mx-auto px-4 py-8 md:px-7">
        <HomeIntro />
        <HomeResources />
        <HomeFeatured />
      </section>
      <section className="max-w-2280 mx-auto">
        <HomePrefooter />
      </section>
    </Layout>
  );
}

export default IndexPage;
