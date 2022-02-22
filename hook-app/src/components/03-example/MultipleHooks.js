import React from 'react'
import useFetch from "../../hooks/useFetch";
import {useCounter} from "../../hooks/useCounter";
import { Button, Card, CardMedia, CardContent, CardActions, Typography, Grid, Container } from '@mui/material'

function MultipleHooks() {
  const {state, increment, decrement, reset} = useCounter(1);
  const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/characters/${state}`);

  const {img, name} = !!data && data;

  return (
    <Container>
      {loading && <h1>Cargando</h1>}
      {!loading && (

        <Card sx={{ maxWidth: "500px"}}>
          <CardMedia
            sx={{height: "70vh",objectFit: "contain"}}
            component="img"
            image={img}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => increment(1)}>
              +
            </Button>
            <Button size="small" onClick={() => decrement(1)}>
              -
            </Button>
          </CardActions>
        </Card>

      )}
    </Container>
  );
}

export default MultipleHooks