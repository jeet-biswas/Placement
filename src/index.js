import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' in React 18
import App from "./App";
import "./index.css";

// Register the service worker (Only if you want to use it)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Ensure the path to the service worker file is correct
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Use React 18's createRoot for rendering
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
