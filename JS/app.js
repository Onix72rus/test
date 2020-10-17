'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');

         if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
            console.log ('OK!');
            personalMovieDB.movies[a] = b;
         } else {
            console.log ('ERROR!');
            i--;
         }
}

if (personalMovieDB.count < 10) {
   console.log ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log ('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
   console.log ('Вы киноман');
} else {
   console.log ('Произошла ошибка');
}
