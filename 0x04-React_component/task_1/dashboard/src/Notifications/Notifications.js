import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import propTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => {
    return (
        <React.Fragment>
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (<div className="Notifications">
                <button
                    style={{ float: "right" }}
                    aria-label="Close"
                    onClick={() => { console.log('Close button has been clicked') }}
                >
                    <img src="./close-icon.png" alt="close icon" />
                </button>
                {listNotifications.length > 0 ? (
                    <>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {listNotifications.map((notification) => (
                                <NotificationItem
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    key={notification.id} />
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

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

Notifications.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

export default Notifications;
