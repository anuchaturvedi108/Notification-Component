import React from 'react';

const NotificationItem = ({ type, message, onClose }) => {
  return (
    <div className={`notification-item notification-${type}`}>
      <span>{message}</span>
      <button className="notification-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default NotificationItem;
