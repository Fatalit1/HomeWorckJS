/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";
let personalMovieDB = {
    movies: {},
    actrors: {},
    geners: [],
    private: false,
  },
  numberOfFilms;
function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  while (
    isNaN(numberOfFilms) ||
    numberOfFilms === null ||
    numberOfFilms === ""
  ) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    personalMovieDB.count = numberOfFilms;
  }
  personalMovieDB.count = numberOfFilms;
}

function detectPersonalLevel() {
  switch (true) {
    case numberOfFilms < 10: {
      alert("Просмотрено довольно мало фильмов");
      break;
    }
    case numberOfFilms >= 10 && numberOfFilms <= 30: {
      alert("Вы классический зритель");
      break;
    }
    case numberOfFilms > 30: {
      alert("Вы киноман");
      break;
    }
    default: {
      alert("Произошла ошибка");
    }
  }
}
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренних фильмов", "");
    while (lastFilm === null || lastFilm === "" || lastFilm.length > 50) {
      lastFilm = prompt("Один из последних просмотренних фильмов", "");
    }
    let markFilm = prompt("На сколько оцените его?", "");
    while (Number.isNaN(+markFilm) || markFilm === null || markFilm === "") {
      markFilm = prompt("На сколько оцените его?", "");
    }

    personalMovieDB.movies[lastFilm] = markFilm;
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.geners[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
  }
}
// start();
// detectPersonalLevel();
// rememberMyFilms();
showMyDB(personalMovieDB.private);
writeYourGenres();
