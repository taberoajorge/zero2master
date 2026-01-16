import React, {useContext} from "react";
import {Button, Container} from "@mui/material";
import {UserContext} from "./UserContext";

function LoginScreen() {
  const {user, setUser} = useContext(UserContext);

  const createUser = {
    name: 'Jorge',
    age: 24
  };

  return (
    <Container>
      <h1>Login Screen</h1>
      <hr />
      <Button
        onClick={() => {
          setUser(createUser);
        }}
      >Crear Usuario</Button>
    </Container>
  );
}

export default LoginScreen;
