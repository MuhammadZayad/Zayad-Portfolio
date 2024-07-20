import React from "react";

const skills = () => {
  return (
    <>
      <h1>SKILLS</h1>
      <div
        className="container3"
        id="skills"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        <div className="c3child1">
          <img src="assets/Skills/html.png" alt="" className="img1" />
          <h2 style={{ color: "white", marginLeft: "80px", marginTop: "8px" }}>
            HTML
          </h2>
        </div>
        <div className="c3child2">
          <img src="assets/Skills/css.png" alt="" className="img2" />
          <h2 style={{ color: "white", marginLeft: "95px", marginTop: "8px" }}>
            CSS
          </h2>
        </div>
      </div>

      <div className="container4" data-aos="flip-left" data-aos-duration="1000">
        <div className="c4child1">
          <img src="assets/Skills/react.png" alt="" className="img3" />
          <h2 style={{ color: "white", marginLeft: "82px", marginTop: "8px" }}>
            REACT
          </h2>
        </div>

        <div className="c4child2">
          <img src="assets/Skills/javascript.png" alt="" className="img4" />
          <h2 style={{ color: "white", marginLeft: "63px", marginTop: "-3px" }}>
            JAVA SCRIPT
          </h2>
        </div>
      </div>

      <div className="container5" data-aos="flip-left" data-aos-duration="1000">
        <div className="c5child1">
          <img src="assets/Skills/bootstrap.png" alt="" className="img5" />
          <h2 style={{ color: "white", marginLeft: "65px", marginTop: "-3px" }}>
            BOOTSTRAP
          </h2>
        </div>
        <div className="c5child2">
          <img src="assets/Skills/oop.png" alt="" className="img6" />
          <h2 style={{ color: "white", marginLeft: "97px", marginTop: "-3px" }}>
            OOP
          </h2>
        </div>
      </div>
    </>
  );
};

export default skills;
