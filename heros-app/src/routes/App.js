import React, {useReducer} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HerosGallery from "../pages/HerosGallery";
import Login from "../pages/Login";
import RegisterAccount from "../pages/RegisterAccount";
import Search from "../pages/Search";
import {CssBaseline} from "@mui/material";
import HeroProfile from "../pages/HeroProfile";
import {AuthContext} from "../auth/authContext";
import authReducer from "../auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || {logged: false};
};

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/heroes/:id" element={<HerosGallery />} />
          <Route exact path="/heroes/*" element={<HerosGallery />} />
          <Route exact path="/heroes/:id/:heroe" element={<HeroProfile />} />
          <Route exact path="/heroes/search" element={<Search />} />
          <Route exact path="/register" element={<RegisterAccount />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
