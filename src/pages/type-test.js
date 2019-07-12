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
        <p className="text-13">This is some text with some <strong>bold type</strong> and some <em>italic type</em> and a <Link to="/">link in</Link> the middle.</p>
        <p className="text-15">This is some text with some <strong>bold type</strong> and some <em>italic type</em> and a <Link to="/">link in</Link> the middle.</p>
        <h4><Link>Morbi lobortis, libero a rhoncus eleifend, arcu ipsum fringilla ligula?</Link></h4>
        <p>Donec condimentum, sapien vitae bibendum volutpat, enim mi ullamcorper risus, molestie elementum orci massa feugiat diam. Mauris vitae neque. Praesent at odio at diam lobortis rutrum. Quisque eget turpis. Aenean purus dui, cursus vitae, porta id, pretium a, turpis.</p>
      </section>
    </Layout>
  );
}

export default typeTest;
