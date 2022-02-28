import React, { useMemo } from "react";
import NavBar from "../components/NavBar/NavBar";
import {
  Button,
  Container,
  Grid,
  Input,
  List,
  Paper,
  Typography,
} from "@mui/material";
import {SearchRounded} from "@mui/icons-material";
import {Box} from "@mui/system";
import useForm from "../hooks/useForm";
import {getHeroByName} from "../helpers/getHero";
import HeroCard from "../components/HeroCard";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

function Search() {
 
  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);
  
  const [values, handleOnChange] = useForm({searchText: q});
  const {searchText} = values;

  const herosFinded = useMemo(() => getHeroByName(q), [q]);


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/heroes/search?q=${searchText}`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Box onSubmit={handleSubmit} component={"form"}>
            <Paper
              sx={{
                width: "100",
                display: "flex",
                justifyContent: "space-between",
                padding: 1,
                alignItems: "center",
              }}
              elevation={10}
            >
              <Input
                value={searchText}
                onChange={handleOnChange}
                autoComplete="off"
                name="searchText"
                placeholder="Search"
                type="text"
                sx={{width: "100%"}}
              />
              <Button type="submit">
                <SearchRounded />
              </Button>
            </Paper>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <List>
          {(q !== '' && herosFinded.length > 0) && (
              <Typography variant="h6">
                {herosFinded.length} heroes found
              </Typography>
            )}
            {(q === '' || herosFinded.length === 0) && (
              <Typography variant="h6">
                No heroes found
              </Typography>
            )}
            <List sx={{width: "100%"}}>
              {herosFinded.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </List>
          </List>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Search;
