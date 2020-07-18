import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Profile from "../components/images/profile";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Profile />
    </div>
    <Link to="/about">Find out more about me</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
