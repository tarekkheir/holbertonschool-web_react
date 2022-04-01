import React from "react";
import propTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const liStyle = this.props.type === 'urgent' ? styles.urgent : styles.default;

    if (this.props.html) {
      return <li
        className={css([liStyle, styles.item])}
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => this.props.markAsRead(this.props.id)} />;
    } else {
      return <li
        className={css([liStyle, styles.item])}
        data-notification-type={this.props.type}
        onClick={() => this.props.markAsRead(this.props.id)}>
        {this.props.value}
      </li>;
    }
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  item: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      padding: '10px 8px',
      borderBottom: '1px solid black',
    },
  }
});

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
