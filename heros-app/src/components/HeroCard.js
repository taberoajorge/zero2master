import React from "react";
import {Link} from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  ListItem,
  CardActions,
  Button,
} from "@mui/material";


function HeroCard({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) {
  const imagePath = `/assets/${id}.jpg`;



  return (
    <ListItem>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <CardMedia
              component="img"
              height="100%"
              src={imagePath}
              alt={superhero}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardContent>
              <CardHeader title={superhero} />
              <p>Publisher: {publisher}</p>
              <p>Alter ego: {alter_ego}</p>
              <p>First appearance: {first_appearance}</p>
              {characters !== alter_ego && <p>Characters: {characters}</p>}
            </CardContent>
            <CardActions>
              <Link
                style={{ textDecoration: "none" }}
                to={`/heroes/${publisher.toLowerCase().replace(/\s/g, "-")}/${id}`}
              >
              <Button
              variant="outlined"
              size="small"
              color="primary">
                 More...
              </Button>
                </Link>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </ListItem>
  );
}

export default HeroCard;
