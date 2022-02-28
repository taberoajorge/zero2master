import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    my: 2,
    color: "white",
    display: "block",
  },
  linkMobile: {
    textDecoration: "none",
    my: 2,
    color: "black",
    display: "block",
  },
});

function NavbarUI({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
  pages,
  handleOpenUserMenu,
  anchorElUser,
  settings,
  handleCloseUserMenu,
  publisher,
}) {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{mr: 2, display: {xs: "none", md: "flex"}}}
        >
          {!publisher ? "Heroes App" : `${publisher.toUpperCase()}`}
        </Typography>

        <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
          <IconButton onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {xs: "block", md: "none"},
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <NavLink
                  className={classes.linkMobile}
                  key={page}
                  onClick={handleCloseNavMenu}
                  to={`/heroes/${page.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {page}
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}
        >
          {!publisher ? "Heroes App" : `${publisher.toUpperCase()}`}
        </Typography>
        <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
          {pages.map((page) => (
            <NavLink
              key={page}
              onClick={handleCloseNavMenu}
              to={`/heroes/${page.toLowerCase().replace(/\s/g, "-")}`}
              className={classes.link}

            >
              {page}
            </NavLink>
          ))}
        </Box>

        <Box sx={{flexGrow: 0}}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{mt: "45px"}}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography
                  onClick={setting === "Logout" && handleLogout}
                  textAlign="center"
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
}

export default NavbarUI;
