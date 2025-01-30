import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((error) => console.log("Service Worker Registration Failed", error));
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
