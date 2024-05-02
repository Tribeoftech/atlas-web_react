import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);
