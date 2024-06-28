import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import AddBlogs from "./AddBlogs.jsx";
import Header from "./Header.jsx";
import "./index.css";
// import { Router } from Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Show from "./Show.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Router>
    <Header />
    <Routes>

      <Route path="/" element={<Home />}></Route>
       <Route path="/addBlog" element={<AddBlogs />}></Route>
     {/* <Route path="/" element={<AddBlogs />}></Route>  */}


      <Route path="/contact" element={<App />}></Route>
      <Route path="/showData" element={<Show />}></Route>
    </Routes>
  </Router>

  // </React.StrictMode>,
);
