import React from "react";

import Layout from "../components/layout";
import Section from "../components/section";
import ExternalLink from "../components/externalLink";
import SEO from "../components/seo";

import {
  NodeImg,
  ReactImg,
  ReduxImg,
  ExpressImg,
  WebpackImg,
  HTML5Img,
  CSS3Img,
  AccessibilityImg,
  JestImg,
  NightwatchImg,
  JenkinsImg,
  AppdImg,
  SplunkImg,
  GitImg,
  GitHubImg,
} from '../images/tech';

import './styles.css';

console.log(NodeImg);

const SkillsPage = () => (
  <Layout>
    <SEO title="About" />
    <h2>Skills</h2>
    <Section className="techList">
      <h3>Web Dev</h3>
      <ul style={{ margin: 0 }}>
        <li className="techListItem" style={{ backgroundImage:`url(${NodeImg})`}}>
          <ExternalLink to="https://nodejs.org/">Node.js</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${ReactImg})`}}>
          <ExternalLink to="https://reactjs.org/">React</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${ReduxImg})`}}>
          <ExternalLink to="https://redux.js.org/">Redux</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${ExpressImg})`}}>
          <ExternalLink to="https://expressjs.com/">Express</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${WebpackImg})`}}>
          <ExternalLink to="https://webpack.js.org/">Webpack</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${HTML5Img})`}}>
          <ExternalLink to="https://en.wikipedia.org/wiki/HTML5">HTML5</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${CSS3Img})`}}>
          <ExternalLink to="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">CSS3</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${AccessibilityImg})`}}>
          <ExternalLink to="https://www.w3.org/WAI/standards-guidelines/wcag/">Accessibility</ExternalLink>
        </li>
      </ul>
    </Section>
    <Section className="techList">
      <h3>Testing</h3>
      <ul style={{ margin: 0 }}>
        <li className="techListItem" style={{ backgroundImage:`url(${JestImg})`}}>
          <ExternalLink to="https://jestjs.io/">Jest</ExternalLink>
        </li>
        <li className="techListItem">
          <ExternalLink to="https://enzymejs.github.io/enzyme/">Enzyme</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${NightwatchImg})`}}>
          <ExternalLink to="https://nightwatchjs.org/">Nightwatch</ExternalLink>
        </li>
        <li className="techListItem">
          <ExternalLink to="https://en.wikipedia.org/wiki/Test-driven_development">Test Driven Development</ExternalLink>
        </li>
        <li className="techListItem">
          <ExternalLink to="https://en.wikipedia.org/wiki/Business-driven_development">Business Driven Development</ExternalLink>
        </li>
      </ul>
    </Section>
    <Section className="techList">
      <h3>Tools</h3>
      <ul style={{ margin: 0 }}>
        <li className="techListItem" style={{ backgroundImage:`url(${JenkinsImg})`}}>
          <ExternalLink to="https://www.jenkins.io/">Jenkins</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${AppdImg})`}}>
          <ExternalLink to="https://www.appdynamics.com/">AppDynamics</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${SplunkImg})`}}>
          <ExternalLink to="https://www.splunk.com/">Splunk</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${GitImg})`}}>
          <ExternalLink to="https://git-scm.com/">Git</ExternalLink>
        </li>
        <li className="techListItem" style={{ backgroundImage:`url(${GitHubImg})`}}>
          <ExternalLink to="https://github.com/">GitHub</ExternalLink>
        </li>
      </ul>
    </Section>
  </Layout>
);

export default SkillsPage;
