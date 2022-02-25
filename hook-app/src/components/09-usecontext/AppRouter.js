import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";


function AppRouter() {
  return (
    <BrowserRouter>
      <>
      <NavBar />
      
      <Routes>
        <Route exac path="/" element={<HomeScreen />} />
        <Route exac path="/about" element={<AboutScreen />} />
        <Route exac path="/login" element={<LoginScreen />} />
        <Route  path="*"  element={<HomeScreen />} />
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default AppRouter;
