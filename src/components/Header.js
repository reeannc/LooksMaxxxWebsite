import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
  <div className="menu">
    <header>
      <h1 className="top">{props.tagline}</h1>
    </header>
  </div>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
