import React from "react";
import Layout from "../components/Layout/layout";
import { Link } from "gatsby"

function typeTest() {
  return (
    <Layout>
      <section>
        <h1>This is the H1 header.</h1>
        <h2>This is the H2 header.</h2>
        <h3>This is the H3 header.</h3>
        <h4>This is the H4 header.</h4>
        <h5>This is the H5 header.</h5>
        <h6>This is the H6 header.</h6>
        <p>This is some text with some <strong>bold type</strong> and some <em>italic type</em> and a <Link to="/">link in</Link> the middle.</p>
      </section>
    </Layout>
  );
}

export default typeTest;
