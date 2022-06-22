import { height } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import CardContainer from "./Cards/CardContainer";
import GalleryIntro from "./Gallery/GalleryIntro";
import logo from "./Images/Cruisenewbie.png";

const Main = () => {
  return (
    <div id="main">
      <div
        className="main-logo"
        // style={{ backgroundImage: "url(/images/Beach.jpg)", height: "100%" }}
      >
        {" "}
        <img src={logo} id="logo" />
      </div>

      <div className="main-intro">
        <Link to="/articles">
          <h2 className="main-intro-head">Articles</h2>
        </Link>
        We are cruisenewbie, introduce you to Royal Caribbean cruise for Newbies
      </div>
      <div className="main-cards">
        <CardContainer />
      </div>
      <div className="main-intro">
        <h2 className="main-intro-head">Gallery</h2>
      </div>
      <GalleryIntro />
    </div>
  );
};

export default Main;
