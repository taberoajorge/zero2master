import React, { useContext } from "react";
import {Container} from "@mui/material";
import { UserContext } from "./UserContext";

function HomeScreen() {

  const {user} = useContext(UserContext);

  console.log(user);

  return (
    <Container>
      <h1>Home Screen</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </Container>
  );
}

export default HomeScreen;
