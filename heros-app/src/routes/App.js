import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HerosGallery from "../pages/HerosGallery";
import Login from "../pages/Login";
import RegisterAccount from "../pages/RegisterAccount";
import Search from "../pages/Search";
import {CssBaseline} from "@mui/material";
import HeroProfile from "../pages/HeroProfile";

function App() {
  return (
    <BrowserRouter>
    <CssBaseline />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/heroes/:id" element={<HerosGallery />} />
        <Route exact path="/heroes/*" element={<HerosGallery />} />
        <Route exact path="/heroes/:id/:heroe" element={<HeroProfile />} />
        <Route exact path="/heroes/search" element={<Search />} />
        <Route exact path="/register" element={<RegisterAccount />} />
        <Route
          path="*"
          element={
            <Login />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
