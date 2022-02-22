import React, {useEffect, useState} from "react";
import {
  AlertTitle,
  Box,
  FormGroup,
  FormLabel,
  OutlinedInput,
} from "@mui/material";

function FormWithCustomHook() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const {name, email, password} = formState;

  const handleOnChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  };

  useEffect(() => {
    // console.log('Hey');
  }, []);

  useEffect(() => {
    console.log('el form cambio');
  }, [formState]);

  useEffect(() => {
    console.log('el email cambio');
  }, [email]);
  

  return (
    <Box component="form">
      <AlertTitle>FormWithCustomHook</AlertTitle>
      <FormGroup>
        <FormLabel>Name:</FormLabel>
        <OutlinedInput
          name="name"
          value={name}
          onChange={handleOnChange}
          id="name"
          autoComplete="off"
        />
        <FormLabel>Email:</FormLabel>
        <OutlinedInput
          name="email"
          value={email}
          onChange={handleOnChange}
          id="email"
          autoComplete="off"
        />
      <FormLabel>password:</FormLabel>
        <OutlinedInput
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="********"
          id="password"
          autoComplete="off"
        />
      </FormGroup>
    </Box>
  );
}

export default FormWithCustomHook;
