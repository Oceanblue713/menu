import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

const Nav = () => {
  return (
    <div>
      <Box>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit">
              Cruise
            </Typography>
            <Button>Article</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;
