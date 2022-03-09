import React from "react";
import propTypes from "prop-types";
import { markAsRead } from "./Notifications";

class NotificationItem extends React.Component {
  render() {
    if (this.props.html) {
      return <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => this.props.markAsRead(this.props.id)} />;
    } else {
      return <li
        data-notification-type={this.props.type}
        onClick={() => this.props.markAsRead(this.props.id)}>
        {this.props.value}
      </li>;
    }
  }
}
NotificationItem.defaultProps = {
  type: "default"
}

NotificationItem.propTypes = {
  html: propTypes.shape({
    __html: propTypes.string
  }),
  type: propTypes.string,
  value: propTypes.string,
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
  markAsRead: propTypes.func
}

export default NotificationItem;
