import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoute from "./PublicRoute";
// import PrivateRoutes from './';
// import PublicRoute from './';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />} />
        <Route element={<PrivateRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
