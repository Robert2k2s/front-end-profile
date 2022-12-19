import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "../Nav/Nav.scss";
import "../Footer/Footer.scss";
import "../About/Aubout.scss";
import "../Project/Project.scss";
import banner from "../../acssets/img/banner.jpeg";
import { Link } from "react-router-dom";

// import { useState } from "react";

const Project = () => {
  return (
    <div className="Project">
      <Nav />

      <div className="Project-main">
        <div className="Project-main-item Project-01">
          <div className="Project-main-items">
            <img src={banner} alt="" />
          </div>

          <div className="Project-title">
            <h2>personal project</h2>
            <Link to="/">detail</Link>
          </div>
        </div>
      </div>

      <Footer />
      <button type="button">
        <Link to="/add-project">model</Link>
      </button>
      <button type="button">bb</button>
    </div>
  );
};

export default Project;
