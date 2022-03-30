import { height } from "@mui/system";
import React from "react";
import CardContainer from "./Cards/CardContainer";
import logo from "./Images/Cruisenewbie.png";

const Main = () => {
  return (
    <div id="main">
      <div
        className="main-logo"
        style={{ backgroundImage: "url(/images/Beach.jpg)", height: "100%" }}
      >
        {" "}
        <img src={logo} id="logo" />
      </div>

      <div className="main-intro">
        We are cruisenewbie, introduce you to Royal Caribbean cruise for Newbies
      </div>
      <div className="main-cards">
        <h2>Articles</h2>
        <CardContainer />
      </div>
      <div className="main-garary">
        <h2>Gallery</h2>
      </div>
    </div>
  );
};

export default Main;
