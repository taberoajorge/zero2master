import React, { useEffect } from "react";
import {
  AlertTitle,
  Box,
  Button,
  FormGroup,
  FormLabel,
  Input,
} from "@mui/material";
import useForm from "../../hooks/useForm";


function FormWithCustomHook() {
  

  const [formValues, handleOnChange] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const {name, email, password} = formValues;

  useEffect(() => {
    console.log('email cambio');

  }, [email])
  
const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(formValues);
}
  

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <AlertTitle>FormWithCustomHook</AlertTitle>
      <FormGroup>
        <FormLabel>Name:</FormLabel>
        <Input
          name="name"
          value={name}
          onChange={handleOnChange}
          id="name"
          autoComplete="off"
        />
        <FormLabel>Email:</FormLabel>
        <Input
          name="email"
          value={email}
          onChange={handleOnChange}
          id="email"
          autoComplete="off"
        />
      <FormLabel>password:</FormLabel>
        <Input
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="********"
          id="password"
          autoComplete="off"
        />
      </FormGroup>
      <Button type="submit">Login</Button>
    </Box>
  );
}

export default FormWithCustomHook;
