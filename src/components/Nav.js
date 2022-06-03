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
          style={{ background: theme.palette.primary.main }}
        >
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link to="/">Cruise</Link>
            <Link to="/newarticle">New Article</Link>
            <Link to="/articles">Articles</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
