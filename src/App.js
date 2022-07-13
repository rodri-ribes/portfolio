import React, { useEffect } from "react";
import './app.css';


import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

import Aos from 'aos';
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    Aos.init({
      duration: 3000,
      once: true
    })
  }, [])



  return (
    <>
      <NavBar />
      <div className="container">
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
