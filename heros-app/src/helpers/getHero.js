import {heroes} from "../data/heroes";

function getHeroById(heroId) {
  return heroes.find((hero) => hero.id.toLowerCase() === heroId);
}

function getHeroByPublisher(publisher) {
  if (publisher) {
    return heroes.filter((hero) => hero.publisher.toLowerCase() === publisher);
  } else {
    return heroes;
  }
}

const getHeroByName = (name = "") => {
  if (name) {
    return heroes.filter((hero) =>
      hero.superhero.toLowerCase().includes(name.toLowerCase())
    );
  } else {
    return [];
  }
};

export {getHeroById, getHeroByPublisher, getHeroByName};
