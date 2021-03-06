import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import NavLink from "./navLink";
import Header from "./header";
import ExternalLink from "./externalLink";
import "./layout.css";

import { LinkedInImg, GitHubImg } from "../images/tech";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <nav
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          textAlign: `center`,
        }}
      >
        <NavLink to="/">About</NavLink>
        <NavLink to="/skills/">Skills</NavLink>
        <NavLink to="/experience/">Experience</NavLink>
      </nav>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ marginTop: "20px" }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <ExternalLink to="https://www.gatsbyjs.org">Gatsby</ExternalLink>
          {`. `}
          Also check out my
          {` `}
          <span
            className="footerLink"
            style={{ backgroundImage: `url(${LinkedInImg})` }}
          >
            <ExternalLink to="https://uk.linkedin.com/in/adam-perlstrom-22b32260">
              LinkedIn
            </ExternalLink>
          </span>
          {` and `}
          <span
            className="footerLink"
            style={{ backgroundImage: `url(${GitHubImg})` }}
          >
            <ExternalLink to="https://github.com/perlstrom93">
              GitHub
            </ExternalLink>
          </span>
          , or
          {` `}
          <a href="mailto:adam.perlstrom@hotmail.co.uk">drop me an email</a>
          {`.`}
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
