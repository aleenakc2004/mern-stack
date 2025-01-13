import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses createRoot
import App from './App'; // Import the App component
import './styles.css'; // Import styles

// Mount the React app to the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* The root component */}
  </React.StrictMode>
);