import React from "react";
import "./index.css";
import Home from "./routers/Home";
import About from "./routers/About";
import Projects from "./routers/Project";
import Contact from "./routers/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
