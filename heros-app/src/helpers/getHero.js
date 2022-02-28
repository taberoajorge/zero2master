import { heroes } from "../data/heroes";

function getHeroById(heroId) {
  return heroes.find(hero => hero.id.toLowerCase() === heroId);
}

function getHeroByPublisher(publisher) {
  return heroes.filter(hero => hero.publisher.toLowerCase() === publisher);
}

function getAllHeros() {
  return heroes
}

export { getHeroById, getHeroByPublisher, getAllHeros };