import { height } from "@mui/system";
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
        <h2>Articles</h2>
        We are cruisenewbie, introduce you to Royal Caribbean cruise for Newbies
      </div>
      <div className="main-cards">
        <CardContainer />
      </div>
      <div className="main-garary">
        <h2>Gallery</h2>
        <GalleryIntro />
      </div>
    </div>
  );
};

export default Main;
