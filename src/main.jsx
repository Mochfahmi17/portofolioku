import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BrowserRouter } from "react-router-dom";
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
