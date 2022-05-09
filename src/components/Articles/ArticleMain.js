import React from "react";
import logo from "../Images/Cruisenewbie.png";
import "./ArticleMain.css";
import Article from "./Article";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { Search } from "@material-ui/icons";
import InputAdornment from "@mui/material/InputAdornment";
import SmallCard from "../Cards/SmallCard";

const ArticleMain = () => {
  return (
    <div id="article-main">
      <div className="main-logo">
        <img src={logo} id="logo" />
      </div>
      <h2 id="articlemain-title">All Articles</h2>
      <TextField>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <Search />
              <SmallCard />
            </InputAdornment>
          }
        />
      </TextField>
    </div>
  );
};

export default ArticleMain;
