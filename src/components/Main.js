import React from "react";
import CardContainer from "./Cards/CardContainer";
import logo from "./Images/Cruisenewbie.png";

const Main = (props) => {
  return (
    <div id="main">
      <img src={logo} id="logo" />
      <CardContainer />
    </div>
  );
};

export default Main;
