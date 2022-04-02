import React from "react";
import NotificationItem from "./NotificationItem";
import propTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import icon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";


class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div
          id="menuItem"
          className={css([styles.menuItem])}
          onClick={this.props.handleDisplayDrawer}
        >
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              id="Notifications"
              style={{ float: "right" }}
              aria-label="Close"
              onClick={this.props.handleHideDrawer}
            >
              <img src={icon}
                alt="close icon"
                height={15}
                width={15} />
            </button>
            {this.props.listNotifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      key={notification.id}
                      id={notification.id}
                      markAsRead={this.props.markNotificationAsRead} />
                  ))}
                </ul>
              </>
            ) : (
              <NotificationItem value="No new notification for now" />
            )}
          </div>)
        }
      </React.Fragment >
    )
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  markNotificationAsRead: () => { }
}

Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: propTypes.func,
  handleHideDrawer: propTypes.func,
  markNotificationAsRead: propTypes.func
}

const opacity = {
  from: { opacity: 0.5 },
  to: { opacity: 1 },
};

const bounce = {
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  Notifications: {
    padding: '1rem',
    border: 'dashed 2px rgba(223, 21, 21, 0.808)',

    '@media (max-width: 900px)': {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      border: 'none',
      padding: '2vh',
      margin: '0',
      backgroundColor: '#fff',
      top: '0',
      fontSize: '20px',
    },
  },

  menuItem: {
    ':hover': {
      cursor: 'pointer',
      animationName: [opacity, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  }
});

export default Notifications;
