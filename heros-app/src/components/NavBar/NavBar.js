import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import NavbarUI from "./NavbarUI";

const pages = ["DC Comics", "Marvel Comics"];
const settings = ["Logout"];

const NavBar = ({publisher}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <NavbarUI
        publisher={publisher}
        handleOpenNavMenu={handleOpenNavMenu}
        anchorElNav={anchorElNav}
        handleCloseNavMenu={handleCloseNavMenu}
        pages={pages}
        handleOpenUserMenu={handleOpenUserMenu}
        anchorElUser={anchorElUser}
        settings={settings}
        handleCloseUserMenu={handleCloseUserMenu}
      />
    </AppBar>
  );
};
export default NavBar;
