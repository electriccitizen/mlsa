import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import CatAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import HomeIntro from '../components/Block/home-intro';
function IndexPage() {
  return (
    <Layout>
      <HomeIntro />
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="text-center  md:justify-center">
        <CatAndHumanIllustration className="block mx-auto w-1/2" title="Cat and human sitting on a couch"
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
