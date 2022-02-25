import React, {useContext} from "react";
import {Button, Container} from "@mui/material";
import {UserContext} from "./UserContext";
function AboutScreen() {
  const {user, setUser} = useContext(UserContext);
  return (
    <Container>
      <h1>About Screen</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <Button onClick={()=>{
       setUser({}) 
      }}>
Log out
      </Button>
    </Container>
  )
}

export default AboutScreen