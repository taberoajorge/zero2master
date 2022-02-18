import React from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system';

function AddCategory({ categories, setCategories }) {
  const form = React.useRef();
  const handleClick = () => {
    const formData = new FormData(form.current);
    const data = {
      newCategories: formData.get('input'),
    }
    const { newCategories } = data;
    setCategories([...categories, newCategories]);
    form.current.reset()
  };
  return (
    <Box ref={form} component={"form"} spacing={2}>
      <TextField name='input' id="outlined-basic" label="Outlined" variant="outlined" />
      <Button onClick={handleClick} variant="contained">Agregar</Button>
    </Box>
  )
}

export default AddCategory
