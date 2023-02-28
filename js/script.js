const numberOfFilms = +prompt("How many films did you watched already?", "");
let askFilm, askRate, askGenere;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  private: false,
}

function showMyDB(isPrivate) {
  if (isPrivate === false) {
    console.log(personalMovieDB.movies);
  }
}
showMyDB(personalMovieDB.private);

function writeYourGeneres() {
  for (let i = 0; i < 3; i++) {
    askGenere = +prompt(`What is your best genere number ${i + 1}?`, "");
    personalMovieDB.geners[i] = askGenere;
  }
}
writeYourGeneres();
console.log(personalMovieDB);

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