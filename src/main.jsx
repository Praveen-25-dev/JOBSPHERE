import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Route/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AppRoutes/>
    {/* <App /> */}
  </BrowserRouter>
);