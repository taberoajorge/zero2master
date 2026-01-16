import { Button } from '@mui/material'
import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
  console.log('mE VUELVO A GENERAR AHHHHHH!');
  return (
    <Button 
    variant="contained" 
    onClick={()=>increment(5)}
    >ShowIncrement</Button>
  )
})

export default ShowIncrement