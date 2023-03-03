const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("How many films did you watched already?", "");
    }
  },
  toggleVisisbleMyDB: function () {
    (personalMovieDB.private) ? personalMovieDB.private = false : personalMovieDB.private = true;
  },
  showMyDB: function (isPrivate) {
    if (!isPrivate) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let askGenre = prompt(`What is your best genres. Saparate them by comma`, "").toLowerCase();
      if (askGenre === '' || askGenre === null) {
        i--;
      } else {
        personalMovieDB.genres = askGenre.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Genre #${i + 1} is - ${item}`);
    });
  },
  rememberMyFilms: function () {
    let askFilm, askRate;
    for (let i = 0; i < 2; i++) {
      do {
        askFilm = prompt("Recently watched film?", "").trim(),
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
}

console.log(personalMovieDB);