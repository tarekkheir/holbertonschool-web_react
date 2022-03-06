import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import propTypes from "prop-types";

const Notifications = ({ displayDrawer }) => {
    return (
        <React.Fragment>
            <div className="menuItem">
                Your notifications
            </div>
            {displayDrawer && (<div className="Notifications">
                <p>
                    Here is the list of notifications
                    <button
                        style={{ float: "right" }}
                        aria-label="Close"
                        onClick={() => { console.log('Close button has been clicked') }}
                    >
                        <img src="./close-icon.png" alt="close icon" />
                    </button>
                </p>
                <ul>
                    <NotificationItem data-priority="default" value="New course available" />
                    <NotificationItem data-priority="urgent" value="New course available" />
                    <NotificationItem data-priority="urgent" html={{ __html: getLatestNotification() }} />
                </ul>
            </div>)}
        </React.Fragment>
    )
}

Notifications.defaultProps = {
    displayDrawer: false
}

Notifications.propTypes = {
    displayDrawer: propTypes.bool
}

export default Notifications;
