import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Snow from "./components/Snow";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Snow/>
  </React.StrictMode>
);
