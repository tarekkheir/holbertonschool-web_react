import React from "react";
import propTypes from "prop-types";


class BodySection extends React.Component {
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

BodySection.propTypes = {
  title: propTypes.string
}

export default BodySection;