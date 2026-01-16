import React, {useEffect, useState} from "react";
import {
  AlertTitle,
  Box,
  FormGroup,
  FormLabel,
  OutlinedInput,
} from "@mui/material";

function SimpleForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const {name, email} = formState;

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
      <AlertTitle>Simple Form</AlertTitle>
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
      </FormGroup>
    </Box>
  );
}

export default SimpleForm;
