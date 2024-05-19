import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./component/pages/About";
import Home from "./component/pages/Home";
import Footer from "./component/Footer";
import Productdetails from "./component/pages/Productdetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Productdetails/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App