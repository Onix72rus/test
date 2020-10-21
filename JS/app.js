'use strict';

let numberOfFilms;

function start () {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

   while(numberOfFilms == "" || numberOfFilms == null || isNaN (numberOfFilms)){
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
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
}

//rememberMyFilms();

function detectPersonalLevl() {
   if (personalMovieDB.count < 10) {
      console.log ('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log ('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      console.log ('Вы киноман');
   } else {
      console.log ('Произошла ошибка');
   }
}

//detectPersonalLevl();

function showMyDB (hidden) {
   if (!hidden){
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <=3; i++) {
      let genresDB = prompt (`Ваш любимый жанр под номером ${i}`);

      if (genresDB!=null && genresDB !='' && genresDB.length<50) {
         personalMovieDB.genres[i-1] = genresDB;
      } else {
         i--;
      }
   }
}

writeYourGenres();
