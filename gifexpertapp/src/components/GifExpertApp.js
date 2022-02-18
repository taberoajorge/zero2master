import React from 'react'
import { Container, ListItemButton, ListItemText } from '@mui/material'
import AddCategory from './AddCategory'

function GifExpertApp() {
  const [categories, setCategories] = React.useState(['One punch', 'Samurai X', 'Dragon ball', 'Cosas happens'])

  return (
    <Container maxWidth="sm">
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory
        categories={categories}
        setCategories={setCategories}
      />
      {categories.map((item) => (
        <ListItemButton key={item} component="a" href="#simple-list">
          <ListItemText primary={item} />
        </ListItemButton>
      ))}
    </Container>

  )
}

export default GifExpertApp