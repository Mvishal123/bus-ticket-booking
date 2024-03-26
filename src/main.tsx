import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BusContextProvider from "./utils/store/bus-state.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BusContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BusContextProvider>
  </React.StrictMode>
);
