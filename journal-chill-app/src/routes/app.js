import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import JournalHome from "../pages/JournalHome";
import AuthRouter from "./AuthRouter";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoute from "./PublicRoute";
import  {CssBaseline} from "@mui/material";

function App() {
  return (
    <BrowserRouter>
    <CssBaseline />
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRoute>
                <AuthRouter />
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoutes>
                <JournalHome />
              </PrivateRoutes>
            }
          />
          {/* <Route path="*" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
