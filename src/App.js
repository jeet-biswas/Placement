import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
