import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import propTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import icon from "../assets/close-icon.png";

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
        <div className="menuItem">
          Your notifications
        </div>
        {this.props.displayDrawer && (<div className="Notifications">
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

export default Notifications;
