import React from "react";
import NavBar from "../components/NavBar/NavBar";
import {useParams} from "react-router-dom";
import {Grid} from "@mui/material";
import HeroList from "../components/HeroList";

function HerosGallery() {
  const {id} = useParams();
  const param = !id ? false : id.replace("-", " ");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavBar publisher={param} />
      </Grid>
      <Grid item xs={12}>
        <HeroList publisher={param} />
      </Grid>
    </Grid>
  );
}

export default HerosGallery;
