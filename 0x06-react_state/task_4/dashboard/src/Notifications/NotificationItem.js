import React from "react";
import propTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const liStyle = this.props.type === 'urgent' ? styles.urgent : styles.default;

    return (
      <li
        className={css([liStyle, styles.item])}
        onClick={() => this.props.markAsRead(this.props.id)}
        data-notification-type={this.props.type}
        {...this.props.html && { dangerouslySetInnerHTML: this.props.html }}
      >
        {!this.props.html ? this.props.value : null}
      </li>
    )
  }
}

const styles = StyleSheet.create({
  default: { color: 'blue' },
  urgent: { color: 'red' },
  item: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      padding: '10px 8px',
      borderBottom: '1px solid black',
    },
  }
});

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
  markAsRead: () => { },
  id: ''
};

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
