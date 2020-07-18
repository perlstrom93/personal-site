import React from 'react';
import PropTypes from "prop-types";

const Section = ({ children, ...rest }) => (
  <div {...rest}>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section;