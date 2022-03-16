import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";


class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={('bodySectionWithMargin', css(styles.bodySectionWithMargin))}>
        <BodySection {...this.props} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
  }
});

export default BodySectionWithMarginBottom;
