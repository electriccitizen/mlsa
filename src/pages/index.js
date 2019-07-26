import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import HomeIntro from "../components/Block/homeIntro";
import HomeResources from "../components/Block/homeResources";
import HomeFeatured from '../components/Block/homeFeatured';

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
    </Layout>
  );
}

export default IndexPage;
