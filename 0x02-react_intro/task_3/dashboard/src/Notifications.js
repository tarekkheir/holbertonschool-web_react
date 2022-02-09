import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";

function Notifications() {
    return (
        <div className="Notifications">
            <p>
                Here is the list of notifications
                <button
                    style={{float: "right"}}
                    aria-label="Close"
                    onClick={() => {console.log('Close button has been clicked')}}
                >
                    <img src="./close-icon.png" alt="close icon"/>
                </button>
            </p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent"
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}

export default Notifications;
