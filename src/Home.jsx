import React, { useEffect, useRef } from "react";
import Pdf from "/src/Pdf/resume.pdf";
import Typed from "typed.js";
const Home = () => {
  /*
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Muhammad Zayad",
        " I am a front-end Web Developer",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typedRef.destroy;
    };
  }, []);
  */
  return (
    <>
      <div className="container2" id="home">
        <div className="c1child1">
          <p style={{ fontSize: "21px", color: "white" }}>
            Hi Everyone, I am Muhammad Zayad from Rawalpindi, Pakistan. I have
            recently done my bachelors degree in Computer Science from Institute
            of Space and technology (IST) Islamabad. I am a Frontend Web
            Developer.
          </p>
          <a href={Pdf} download="resume.pdf" className="btn1">
            Download Resume
          </a>
        </div>
        <div className="c1child2">
          <img src="/assets/Zayad/zayad.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
