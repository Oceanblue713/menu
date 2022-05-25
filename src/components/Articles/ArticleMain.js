import React from "react";
import logo from "../Images/Cruisenewbie.png";
import "./ArticleMain.css";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { Search } from "@material-ui/icons";
import InputAdornment from "@mui/material/InputAdornment";
import SmallCard from "../Cards/SmallCard";
import Box from "@material-ui/core/Box";
import { articles } from "../../articles/article1";

const ArticleMain = () => {
  return (
    <div id="article-main">
      <div className="main-logo">
        <img src={logo} id="logo" />
      </div>
      <h2 id="articlemain-title">All Articles</h2>
      <Search />
      <Box>
        <SmallCard image={articles[0].image} title={articles[0].title} />
      </Box>
    </div>
  );
};

export default ArticleMain;
