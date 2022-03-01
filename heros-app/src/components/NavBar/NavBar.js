import React, {useContext, useState} from "react";
import AppBar from "@mui/material/AppBar";
import NavbarUI from "./NavbarUI";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../auth/authContext";
import { types } from "../../types/types";

const pages = ["DC Comics", "Marvel Comics", "Search"];
const settings = ["Logout"];

const NavBar = ({publisher}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({type: types.logout});
    navigate("/login", {
      replace: true,
    });
  };


  return (
    <AppBar position="static">
      <NavbarUI
      user={user}
        handleLogout={handleLogout}
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
