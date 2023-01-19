import React from "react";
import PropTypes from 'prop-types';

const Notification = ({message}) => (
    <p>{message}</p>
)

export default Notification;

Notification.propType = {
    message: PropTypes.string
}