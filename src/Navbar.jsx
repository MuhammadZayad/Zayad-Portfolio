import React from "react";

const Nav = () => {
  return (
    <>
      <div className="container1">
        <div
          style={{
            color: "white",
            fontSize: "40px",
            marginLeft: "90px",
            fontWeight: "bolder",
          }}
          className="zayad"
        >
          ZAYAD
        </div>
        <div className="child2" data-aos="fade-down" data-aos-duration="1000">
          <a href="#home" className="Nav_items">
            Home
          </a>
          <a href="#skills" className="Nav_items">
            Skills
          </a>
          <a href="#projects" className="Nav_items">
            Projects
          </a>
          <a href="#services" className="Nav_items">
            Services
          </a>

          <a href="#contact " className="Nav_items">
            Contact me
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
