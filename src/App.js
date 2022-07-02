import React from "react";
import './app.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
    
  return (
    <>
      <NavBar/>
        <div className="container">
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
      <Footer/>
    </>
  );
}

export default App;
