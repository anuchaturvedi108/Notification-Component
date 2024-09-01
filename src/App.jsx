import React, { useRef } from 'react';
import NotificationManager from './NotificationManager';
import ExampleComponent from './ExampleComponent';

const App = () => {
  const notificationManagerRef = useRef(null);

  return (
    <div className="app">
      {/* Pass the ref down to be used for notifications */}
      <NotificationManager ref={notificationManagerRef} duration={3000} />
      <ExampleComponent notificationManagerRef={notificationManagerRef} />
    </div>
  );
};

export default App;
