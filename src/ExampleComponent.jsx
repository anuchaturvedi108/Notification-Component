import React from 'react';

const ExampleComponent = ({ notificationManagerRef }) => {
  const handleSuccessClick = () => {
    notificationManagerRef.current.addNotification(
      'success',
      'This is a success message!'
    );
  };

  const handleErrorClick = () => {
    notificationManagerRef.current.addNotification(
      'error',
      'This is an error message!'
    );
  };

  const handleWarningClick = () => {
    notificationManagerRef.current.addNotification(
      'warning',
      'This is a warning message!'
    );
  };

  return (
    <div>
      <button onClick={handleSuccessClick}>Show Success Notification</button>
      <button onClick={handleErrorClick}>Show Error Notification</button>
      <button onClick={handleWarningClick}>Show Warning Notification</button>
    </div>
  );
};

export default ExampleComponent;
