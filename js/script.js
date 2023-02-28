let askFilm, askRate, askGenre, numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}


function start() {
  while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films did you watched already?", "");
  }
}
start();


function showMyDB(isPrivate) {
  if (!isPrivate) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);


function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = +prompt(`What is your best genre number ${i + 1}?`, "");
  }
}
writeYourGenres();


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    do {
      askFilm = prompt("Recently watched film?", "");
      askRate = prompt("How will you rate it?", "");
    } while (askFilm.length < 50 || ((askFilm === null || askRate === null) || (askFilm === '' || askRate === '')));
    personalMovieDB.movies[askFilm] = askRate;
  }
}
rememberMyFilms();


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('More');
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Good');
  } else if (personalMovieDB.count < 30) {
    console.log('Expert');
  } else {
    console.log('Error');
  }
}
detectPersonalLevel();

console.log(personalMovieDB);