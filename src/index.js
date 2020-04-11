import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

// Renders all of the Components put together by app.jsx
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
