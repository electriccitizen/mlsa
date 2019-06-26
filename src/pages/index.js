import React from "react";
import Layout from "../components/Layout/layout";
import SEO from "../components/Layout/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="text-center  md:justify-center">
        <img
          src={catAndHumanIllustration}
          className="block mx-auto w-1/2"
          alt="Cat and human sitting on a couch"
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
