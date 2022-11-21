/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";
let personalMovieDB = {
  count: 0,
  movies: {},
  actrors: {},
  geners: [],
  private: false,
  start: function () {
    personalMovieDB.start = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      isNaN(personalMovieDB.start) ||
      personalMovieDB.count === null ||
      personalMovieDB.count === ""
    ) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  detectPersonalLevel: function () {
    switch (true) {
      case personalMovieDB.count < 10: {
        alert("Просмотрено довольно мало фильмов");
        break;
      }
      case personalMovieDB.count >= 10 && personalMovieDB.count <= 30: {
        alert("Вы классический зритель");
        break;
      }
      case personalMovieDB.count > 30: {
        alert("Вы киноман");
        break;
      }
      default: {
        alert("Произошла ошибка");
      }
    }
  },
  rememberMyFilms: function () {
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
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  //   3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
  // Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
  // при помощи метода forEach вывести в консоль сообщения в таком виде:
  // "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      personalMovieDB.geners[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`
      );
      while (
        personalMovieDB.geners[i] === null ||
        personalMovieDB.geners[i] === ""
      ) {
        personalMovieDB.geners[i] = prompt(
          `Ваш любимый жанр под номером ${i + 1}`
        );
      }
    }
    personalMovieDB.geners.forEach((genere) => {
      console.log(
        `Любимый жанр #${
          personalMovieDB.geners.indexOf(genere) + 1
        } - это ${genere}`
      );
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();
