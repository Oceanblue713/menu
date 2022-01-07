import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography  from '@mui/material/Typography';

const Nav = () => {
  return (
    <AppBar position="static">
      <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Cruise
      </Typography>
    </AppBar>
  )
}

export default Nav;