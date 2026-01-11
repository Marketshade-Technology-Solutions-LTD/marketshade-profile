import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* GitHub Pages SPA redirect fix */
if (sessionStorage.redirect) {
  history.replaceState(null, "", sessionStorage.redirect);
  sessionStorage.removeItem("redirect");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);