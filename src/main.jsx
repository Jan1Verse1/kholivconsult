


// import React from "react";
// import { createRoot } from "react-dom/client";  // ✅ import createRoot directly
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import "@fontsource/roboto";
// import App from "./App";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);