import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Display web vitals when in developement mode
if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}
