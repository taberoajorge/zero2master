import {Card, CardHeader, CardMedia, Grid, CardContent, CardActions, Button} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {getHeroById} from "../helpers/getHero";

function HeroProfile() {
  const {heroe} = useParams();

  const {id, superhero, publisher, alter_ego, first_appearance, characters} =
    getHeroById(heroe);
  const imagePath = `/assets/${id}.jpg`;

  return (
    <Card>
      <CardHeader title={superhero} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            height="100%"
            src={imagePath}
            alt={superhero}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
        <CardContent>
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
              size="large"
              color="primary">
                 Back
              </Button>
                </Link>
            </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default HeroProfile;
