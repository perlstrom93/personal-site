import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Logo from "./images/logo";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0e62aa`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 0`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <div style={{ width: `80px`, margin: 0, display: `inline-block` }}>
          <Logo />
        </div>
        <h1
          style={{
            margin: 0,
            display: `inline-block`,
            verticalAlign: `top`,
            padding: 10,
          }}
        >
          {siteTitle}
        </h1>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
