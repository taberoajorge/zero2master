import {useContext} from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../auth/authContext";

function PublicRoute({children}) {
  const {user} = useContext(AuthContext);
  return !user.logged ? children : <Navigate to={"/heroes"}/>; 
}

export default PublicRoute;
