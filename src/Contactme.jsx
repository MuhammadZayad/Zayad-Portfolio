import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Contactme = () => {
  return (
    <>
      <div className="container6" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-items">
          <a
            href="https://www.instagram.com/rajpoot_zayad/?hl=en"
            target="_blank"
            className="items"
          >
            <FaInstagramSquare className="icons" />
          </a>
          <a
            href=" https://www.facebook.com/muhammad.zayad.585"
            target="_blank"
            className="items"
          >
            <IoLogoFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zayad-2a3594235"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a href="mailto:zayadraja33@gmail.com" className="items">
            <SiGmail className="icons" />
          </a>
          <a
            href="https://github.com/MuhammadZayad"
            target="_blank"
            className="items"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contactme;
