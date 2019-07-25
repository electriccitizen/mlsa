import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import HomeIntro from "../components/Block/home-intro";
import HomeFeatured from '../components/Block/home-featured';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="text-center  md:justify-center">
        <HomeIntro />
        <HomeFeatured />
      </section>
    </Layout>
  );
}

export default IndexPage;
