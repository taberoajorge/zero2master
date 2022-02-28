import {List} from "@mui/material";
import React, {useMemo} from "react";
import {getHeroByPublisher} from "../helpers/getHero";
import HeroCard from "./HeroCard";

function HeroList({publisher}) {
  const heros = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <List sx={{width: "100%"}}>
      {heros.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </List>
  );
}

export default HeroList;
