import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Login from "../pages/Login";
import RegisterAccount from "../pages/RegisterAccount";
import { AlertTitle } from "@mui/material";
import NavBar from "../components//NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAccount />} />
        <Route
          path="*"
          element={<AlertTitle sx={{fontSize: 40}}>ERROR: 404<br/> NOT FOUND</AlertTitle>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
