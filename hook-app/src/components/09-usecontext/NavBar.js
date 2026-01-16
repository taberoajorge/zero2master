import {
  AppBar,
  Button,
  CssBaseline,
  // IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import {Box} from "@mui/system";
import React from "react";
import {Link} from "react-router-dom";



function NavBar() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Use Context
          </Typography>
          <Button color="inherit">
            <Link  to="/">
              <Typography>Home</Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link  to="./About">
              <Typography>About</Typography>
            </Link>
          </Button>
          <Button color="inherit">
            <Link  to="./Login">
              <Typography>Login</Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
