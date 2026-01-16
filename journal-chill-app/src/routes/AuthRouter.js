import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#000000",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function AuthRouter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AuthRouter;
