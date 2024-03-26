import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import App from "./App.tsx";
import "./index.css";
import BusContextProvider from "./utils/store/bus-state.tsx";
import SeatContextProvider from "./utils/store/seat-state.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BusContextProvider>
      <SeatContextProvider>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </SeatContextProvider>
    </BusContextProvider>
  </React.StrictMode>
);
