import { List } from "@mui/material";
import React from "react";
import { getHeroByPublisher, getAllHeros } from "../helpers/getHero";
import HeroCard from "./HeroCard";

function HeroList({publisher}) {

  
  const heros = !publisher ? getAllHeros() : getHeroByPublisher(publisher);

  return (

      <List sx={{ width: '100%'}}>
        {heros.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </List>

  );
}

export default HeroList;
