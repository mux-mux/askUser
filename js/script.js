const numberOfFilms = +prompt("How many films did you watched already?", "");
let askFilm, askRate;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  generes: [],
  private: false,
}

for (let i = 0; i < 2; i++) {
  do {
    askFilm = prompt("Recently watched film?", "");
    askRate = prompt("How will you rate it?", "");
  } while (askFilm.length < 50 || ((askFilm === null || askRate === null) || (askFilm === '' || askRate === '')));
  personalMovieDB.movies[askFilm] = askRate;
}

// let j;
// while (j < 2) {
//   do {
//     askFilm = prompt("Recently watched film?", "");
//   } while (askFilm.length < 50 && (askFilm === undefined && askFilm === ''));
//   askRate = +prompt("How will you rate it?", "");
//   personalMovieDB.movies[askFilm] = askRate;
//   j++;
// }

if (personalMovieDB.count < 10) {
  console.log('More');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('Good');
} else if (personalMovieDB.count < 30) {
  console.log('Expert');
} else {
  console.log('Error');
}
console.log(personalMovieDB);