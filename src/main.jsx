import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AboutIndex from "./components/About/AboutIndex.jsx";
import WorkWithUsIndex from "./components/WorkWithUs/WorkWithUsIndex.jsx";
import ContactIndex from "./components/Contact/ContactIndex.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route exact path="/" Component={App} />
            <Route exact path="/about" Component={AboutIndex} />
            <Route exact path="/contact" Component={ContactIndex} />
            <Route exact path="/work-with-us" Component={WorkWithUsIndex} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
