import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import SEO from "../components/seo";

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" />
    <h2>Experience</h2>
    <Section borderBottom>
      <h3>Analyst Consultant</h3>
      <h4>first direct, April 2020 - Present</h4>
      <p>
        Writing high quality, maintainable and scalable code to improve the
        functionality and experience of the online banking application. Rapidly
        iterating through requirements to get quick fedback from stakeholders
        and allow to see results quickly. Investigating and prototyping new
        technologies and solutions to show the benefits and how they fit into
        our workflow.
      </p>
    </Section>
    <Section borderBottom>
      <h3>Software Engineer</h3>
      <h4>first direct, November 2018 - April 2020</h4>
      <p>
        Working in cross functional teams, locally and remotely, working both
        Scrum and Kanban to create high-quality customer experiences across all
        browsers and devices. Working in a fast-paced agile environment aloowed
        me to gain invaluable experience using the latest technologies, tools
        and methodologies, while constantly pushing my own boundaries and
        furthering my own drive to go beyond what is expected of me.
      </p>
    </Section>
    <Section borderBottom>
      <h3>Analyst Developer</h3>
      <h4>HSBC, January 2017 – November 2018</h4>
      <p>
        Working consistently at a high level developing and implementing
        processes and tools, which have allowed my team to have confidence in
        the changes that they are making, leading to reduced risk and issues.
        Alongside this always supporting the other members of my team, sharing
        the latest technologies and best practices while helping them though any
        problem that they need help with. Working across multiple brands and
        platforms I gained knowledge in a variety of areas, which required me to
        build good working relationships while quickly learning and adapting to
        new systems, skills and procedures.
      </p>
    </Section>
    <Section borderBottom>
      <h3>IT Consultant</h3>
      <h4>FDM Group, July 2014 – January 2017</h4>
      <p>
        Recruited onto their graduate programme wher I recieve training in
        multiple different roles, which enabled me to go to HSBC and work in an
        international team, developing new banking and public websites. While
        also maintaining and improving their existing websites, diagnosing and
        resolving defects, and supporting these from development to deployment.
      </p>
    </Section>
    <Section borderBottom>
      <h3>2:1 BSc (Hons) Mathematics and Statistics</h3>
      <h4>Coventry University, September 2011 – July 2014</h4>
      <p>
        Applied Mathematical Methods, Complex Variables and Linear Mathematics,
        Advanced Calculus, Statistical Design and Modelling, Statistical Models,
        Mathematical Modelling, Problem Solving and, Operational Research.
      </p>
    </Section>
  </Layout>
);

export default ExperiencePage;
