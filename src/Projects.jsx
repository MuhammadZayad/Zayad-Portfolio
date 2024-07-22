import React from "react";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    "assets/Skills/fyp1.png",
    "assets/Skills/fyp2.png",
    "assets/Skills/fyp2(1).png",
    "assets/Skills/fyp2(2).png",
    "assets/Skills/fyp2(3).png",
    "assets/Skills/fyp3.png",
    "assets/Skills/fyp3(1).png",
    "assets/Skills/fyp3(2).png",
    "assets/Skills/fyp3(3).png",
  ];

  return (
    <>
      <h1 className="main-project">PROJECTS</h1>
      <div
        className="container10"
        id="projects"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="c10child1">
          <h2>React Weather App</h2>
          <p>
            A web application developed with React.js that fetches real-time
            weather data using the OpenWeatherMap API. Features include
            location-based weather updates, search functionality for specific
            locations, and a user-friendly interface with dynamic weather icons
            and temperature units toggling. Demonstrates proficiency in
            React.js, API integration, and responsive design.
          </p>
          <a
            href="https://weather-app-phi-black-22.vercel.app/"
            target="_blank"
            className="drop-shadow"
          >
            Project Link
          </a>
        </div>
        <div className="c10child2">
          <img src="./assets/Skills/w-ss.png" alt="" className="w-img" />
        </div>
      </div>

      <div
        className="container11"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="c11child1">
          <h2>React Calculator</h2>
          <p>
            Built using React.js, this calculator web application provides basic
            arithmetic functionalities in a sleek and user-friendly interface.
            It supports addition, subtraction, multiplication, division, and
            allows users to perform calculations seamlessly. The app
            demonstrates proficiency in React.js state management, component
            lifecycle, and responsive design, offering a straightforward
            solution for everyday calculations.
          </p>
          <a
            href="https://animatedcalculatorreact-muhammad-zayads-projects.vercel.app/"
            target="_blank"
            className="drop-shadow"
          >
            Project Link
          </a>
        </div>
        <div className="c11child2">
          <img src="./assets/Skills/c-ss.png" alt="" className="w1-img" />
        </div>
      </div>

      <div
        className="container12"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div className="c12child1">
          <h2>E-Services for transporting agencies</h2>
          <p>
            This project is a comprehensive web application designed to
            streamline the operations of transporting agencies. It features two
            main modules: User and Admin.
            <br /> User Module: Allows users to book transport services, track
            shipments, and manage their accounts.
            <br />
            Admin Module: Provides administrative tools to manage bookings,
            track vehicles, and oversee user activity.
            <br />
            Developed using HTML, CSS, JavaScript for the frontend, and PHP with
            SQL databases for the backend, this project ensures efficient and
            user-friendly e-services for both customers and administrators..
          </p>
        </div>

        <div className="c12child2">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="w12-img"
                  src={image}
                  alt={`Project slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Projects;
