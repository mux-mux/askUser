let askFilm, askRate, askGenre, numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("How many films did you watched already?", "");
    }
  },
  showMyDB: function (isPrivate) {
    if (!isPrivate) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      askGenre = +prompt(`What is your best genre number ${i + 1}?`, "");
      if (askGenre === '' || askGenre === null) {
        i--;
      } else {
        personalMovieDB.genres[i] = askGenre;
      }
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      do {
        askFilm = prompt("Recently watched film?", "").trim();
        askRate = prompt("How will you rate it?", "");
      } while (askFilm.length < 50 || ((askFilm === null || askRate === null) || (askFilm === '' || askRate === '')));
      personalMovieDB.movies[askFilm] = askRate;
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('More');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log('Good');
    } else if (personalMovieDB.count < 30) {
      console.log('Expert');
    } else {
      console.log('Error');
    }
  },
  toggleVisisbleMyDB: function (isPrivate) {
    (!isPrivate) ? personalMovieDB.private = true : personalMovieDB.private = false;
  }
}



personalMovieDB.start();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.toggleVisisbleMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

personalMovieDB.genres.forEach((item, i) => {
  console.log(`Genre #${i + 1} is - ${item}`);
});

console.log(personalMovieDB);