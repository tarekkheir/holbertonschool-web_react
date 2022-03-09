import React from "react";
import propTypes from "prop-types";

const NotificationItem = ({ type, value, html }) => {
    if (html) {
        return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
    } else {
        return <li data-notification-type={type}>{value}</li>;
    }
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
