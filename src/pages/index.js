import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import HomeIntro from "../components/Block/home-intro";
import HomeResources from "../components/Block/home-resources";
import HomeFeatured from '../components/Block/home-featured';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section>
        <HomeIntro />
        <HomeResources />
        <HomeFeatured />
      </section>
    </Layout>
  );
}

export default IndexPage;
