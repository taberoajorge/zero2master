import React, {useCallback, useMemo} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import {getHeroById} from "../helpers/getHero";

function HeroProfile() {
  const {heroe} = useParams();
  const navigate = useNavigate();

  const { id,
          superhero,
          publisher, 
          alter_ego, 
          first_appearance, 
          characters} = useMemo(() => getHeroById(heroe), [heroe]);

  const imagePath = `/assets/${id}.jpg`;

  const handleClick = useCallback(() => {
    navigate(-1);
  }, []);

  if (!heroe) {
    return <Navigate to="/heroes" />;
  }

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
            <Button
              onClick={handleClick}
              variant="outlined"
              size="large"
              color="primary"
            >
              Back
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default HeroProfile;
