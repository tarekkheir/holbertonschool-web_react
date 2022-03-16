import React from "react";
import NotificationItem from "./NotificationItem";
import propTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import icon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications > this.props.listNotifications;
  }

  render() {
    return (
      <React.Fragment>
        <div className={('menuItem', css([styles.menuItem]))}>
          Your notifications
        </div>
        {this.props.displayDrawer && (<div className={('Notifications', css(styles.Notifications))}>
          <button
            style={{ float: "right" }}
            aria-label="Close"
            onClick={() => { console.log('Close button has been clicked') }}
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
                    markAsRead={this.markAsRead} />
                ))}
              </ul>
            </>
          ) : (
            <p>No new notification for now</p>
          )
          }
        </div>)
        }
      </React.Fragment >
    )
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape),
  markAsRead: propTypes.func
}

const opacity = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(-5px)',
  },

  '100%': {
    transform: 'translateY(5px)',
  },
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
