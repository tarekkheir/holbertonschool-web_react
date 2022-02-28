import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

function Notifications() {
    return (
        <div className="Notifications">
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
        </div>
    )
}

export default Notifications;
