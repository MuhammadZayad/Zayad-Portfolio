// Services.js
import React from "react";

const Services = () => {
  return (
    <section
      className="services-section"
      id="services"
      data-aos="zoom-in-down"
      data-aos-duration="1000"
    >
      <h2 className="section-title"> SERVICES</h2>
      <div className="services-container">
        <div className="service-card">
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            We build responsive and scalable web applications to meet your
            business needs.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-title">Responsive Designs</h3>
          <p className="service-description">
            I develop responsive websites that work seamlessly across various
            devices and screen sizes.
          </p>
        </div>
        <div className="service-card">
          <h3 className="service-title">Expertise</h3>
          <p className="service-description">
            I have expertise in using popular frontend library of java script
            like React to build dynamic web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
