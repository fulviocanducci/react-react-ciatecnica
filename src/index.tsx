import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UserContextProvider from './contexts/UserContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
