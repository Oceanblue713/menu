import React from "react";
import logo from "../Images/Cruisenewbie.png";
import "./ArticleMain.css";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import SmallCard from "../Cards/SmallCard";
import Box from "@material-ui/core/Box";
import { articles } from "../../articles/article1";
import { OutlinedInput } from "@material-ui/core";

const ArticleMain = () => {
  return (
    <div id="article-main">
      <div className="main-logo">
        <img src={logo} id="logo" />
      </div>
      <h2 id="articlemain-title">All Articles</h2>
      <Box>
        <TextField>
          <OutlinedInput>
            <Search>
              <SearchIcon />
            </Search>
          </OutlinedInput>
        </TextField>
      </Box>
      <Box>
        {articles.map((article) => {
          return (
            <SmallCard
              image={article.image}
              title={article.title}
              key={article.id}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default ArticleMain;
