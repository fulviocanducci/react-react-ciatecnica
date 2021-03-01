import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UserContextProvider from './contexts/UserContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
