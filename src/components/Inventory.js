import propTypes from "prop-types";
import React from "react";

class Inventory extends React.Component {
  staticPropTypes = {
    loadBeautyGuide: propTypes.func,
  };

  render() {
    return (
      <div className="Inventory">
        <button onClick={this.props.loadBeautyGuide}>
          Click to see Beauty Guide
        </button>
      </div>
    );
  }
}

export default Inventory;
