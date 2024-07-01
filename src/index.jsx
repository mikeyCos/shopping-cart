import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import routes from "./routes/routes";
import "./styles/index.css";
import "./styles/reset.styles.css";

const router = createBrowserRouter(routes);
// console.log(router);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
