import React from "react";
import logo from "../Images/Cruisenewbie.png";
import "./ArticleMain.css";
import Article from "./Article";
import { Search } from "@material-ui/icons";

const ArticleMain = () => {
  return (
    <div id="article-main">
      <div className="main-logo">
        <img src={logo} id="logo" />
      </div>
      <h2 id="articlemain-title">All Articles</h2>
      <Search />
    </div>
  );
};

export default ArticleMain;
