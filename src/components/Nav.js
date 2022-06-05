import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import theme from "../theme";

const Nav = () => {
  return (
    <div>
      <Box>
        <AppBar
          position="sticky"
          style={{ background: theme.palette.secondary.main, color: "inherit" }}
        >
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link to="/" color="white">
              Cruise
            </Link>
            <Link to="/newarticle">New Article</Link>
            <Link to="/articles">Articles</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
