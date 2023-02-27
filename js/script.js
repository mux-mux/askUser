const numberOfFilms = +prompt("How many films did you watched already?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  generes: [],
  private: false
}

const askFilm = prompt("Recently watched film?", "");
const askRate = +prompt("How will you rate it?", "");

const askFilm2 = prompt("Recently watched film?", "");
const askRate2 = +prompt("How will you rate it?", "");

personalMovieDB.movies.askFilm = askRate;
personalMovieDB.movies.askFilm2 = askRate2;

console.log(personalMovieDB);