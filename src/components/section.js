import React from "react";
import PropTypes from "prop-types";

const Section = ({
  children,
  borderBottom = false,
  borderRight = false,
  ...rest
}) => (
  <div
    style={{
      marginTop: "20px",
      padding: "1rem",
      borderRight: borderRight ? "1px solid #0e62aa" : "none",
      borderBottom: borderBottom ? "1px solid #0e62aa" : "none",
    }}
    {...rest}
  >
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  borderBottom: PropTypes.bool,
  borderRight: PropTypes.bool,
};

export default Section;
