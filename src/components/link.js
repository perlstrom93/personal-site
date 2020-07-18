import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      padding: `5px 20px`
    }}
  >
    {children}
  </Link>
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavLink;