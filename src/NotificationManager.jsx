import React, { useState, useImperativeHandle, forwardRef } from 'react';
import NotificationItem from './NotificationItem';

const NotificationManager = forwardRef((props, ref) => {
  const [notifications, setNotifications] = useState([]);
  const [nextId, setNextId] = useState(1);
  const { duration: defaultDuration } = props;
  // Expose the addNotification method to the ref
  useImperativeHandle(ref, () => ({
    addNotification(type, message, duration = 1000) {
      const id = nextId;
      const notificationDuration = defaultDuration || duration;
      setNextId(nextId + 1);

      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { id, type, message, notificationDuration },
      ]);

      setTimeout(() => {
        removeNotification(id);
      }, notificationDuration);
    },
  }));

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          message={notification.message}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
});

export default NotificationManager;
