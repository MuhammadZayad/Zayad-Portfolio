import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Contactme from "./Contactme";
import Services from "./Services";
import Projects from "./Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Services />
      <Projects />
      <Contactme />
    </>
  );
};

export default App;
