import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Profile from "../components/images/profile";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="About Me" />
    <h2>About Me</h2>
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Profile />
    </div>
    <p>
      Accidentially fell into the world of software development after
      university, but have proven that I am well suited for it, quickly growing
      from someone who hardly knew what JavaScript was to a Senior Engineer,
      while bringing a common sense approach it to.
    </p>
    <p>
      Over the years I have grown both personally and professionally, constantly
      improving myself, my knowledge and my skillset. My main area of expertise
      is in web devlopment, specifically centered around JavaScript, creating
      great customer experiences with Node.js and React, although I am always
      open to new ways of working and technologies that can imrpove these.
    </p>
    <p>
      Although recently it has not just been purely developing applications,
      rather supporting the entire stack at all levels. This has involved
      writing and implementing automation tests, setting up monitoring and
      alerting in AppDynamics and Splunk, improving processes and pipelines
      through Jenkins to make sure that there is confidence is our code that we
      are deploying.
    </p>
    <p>
      Always looking for new technologies and oppurtunities to learn and improve
      myself.
    </p>
  </Layout>
);

export default IndexPage;
