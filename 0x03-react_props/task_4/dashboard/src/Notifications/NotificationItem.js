import React from "react";
import propTypes from "prop-types";

function NotificationItem(props) {
    return (
        <li data-notification-type={props.type}
            dangerouslySetInnerHTML={props.html}>{props.value}</li>
    );
}

NotificationItem.defaultProps = {
    type: "default"
}

NotificationItem.propTypes = {
    html: propTypes.shape({
        __html: propTypes.string
    }),
    type: propTypes.string,
    value: propTypes.string
}

export default NotificationItem;
