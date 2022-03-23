type MovieInfo = {
  id: number;
  title: string;
  year: number;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string;
  actors: string[];
  plot: string;
  country: string;
  poster: string;
  imdbRating: number;
  imdbVotes: number;
  type?: string;
  boxOffice: string;
  production: string;
};

const films: MovieInfo[] = [
  {
    id: 1,
    title: 'Black Widow',
    year: 2021,
    released: '09 Jul 2021',
    runtime: '134 min',
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    director: 'Cate Shortland',
    writer: 'Eric Pearson, Jac, Schaeffer, Ned Benson',
    actors: ['Scarlett Johansson', 'Florence Pugh', 'David Harbour'],
    plot: 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.',
    country: 'United States',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@.V1_SX300.jpg',
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: 'movie',
    boxOffice: '$138,027,361',
    production: 'Marvel Studios',
  },
  {
    id: 2,
    title: 'Harry Potter and the Deathly Hallows: Part 2',
    year: 2011,
    released: '15 Jul 2011',
    runtime: '130 min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    director: 'David Yates',
    writer: 'Steve Kloves, J.K.Rowling',
    actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    country: 'United Kingdom, United States',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@.V1_SX300.jpg',
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: 'movie',
    boxOffice: '$381,409,310',
    production: 'Heyday Films, Moving Picture Company, Warner Bros.',
  },
  {
    id: 3,
    title: 'Star Wars',
    year: 1977,
    released: '25 May 1977',
    runtime: '121 min',
    genre: ['Action', 'Adventure', 'Fantasy'],
    director: 'George Lucas',
    writer: 'George Lucas',
    actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the mpire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
    country: 'United States, United Kingdom',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.V1_SX300.jpg',
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: 'movie',
    boxOffice: '$460,998,507',
    production: 'Lucasfilm Ltd.',
  },
  {
    id: 4,
    title: 'Harry Potter and the Half-Blood Prince',
    year: 2009,
    released: '15 Jul 2009',
    runtime: '153 min',
    genre: ['Action', 'Adventure', 'Family'],
    director: 'David Yates',
    writer: 'Steve Kloves, J.K.Rowling',
    actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
    country: 'United Kingdom',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
    imdbRating: 7.6,
    imdbVotes: 492245,
    boxOffice: '$302,305,431',
    production: 'Heyday Films, Warner Bros.',
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: '16 Nov 2001',
    runtime: '152 min',
    genre: ['Adventure', 'Family', 'Fantasy'],
    director: 'Chris Columbus',
    writer: 'J.K. Rowling, Steve Kloves',
    actors: ['Daniel Radcliffe', 'Rupert Grint', 'Richard Harris'],
    plot: 'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
    country: 'United Kingdom, United States',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@.V1_SX300.jpg',
    imdbRating: 7.6,
    imdbVotes: 684604,
    boxOffice: '$318,087,620',
    production: '1492 Pictures, Heyday Films, Warner Brothers',
  },
];

// 1. Собрать в массив все жанры фильмов (без повторения)

const f1 = (arr: MovieInfo[]): string[] => {
  const arr1: string[] = arr
    .map((item) => item.genre)
    .reduce((accum, curr) => accum.concat(curr));

  const unique: Set<string> = new Set(arr1); // ?? вроде работает

  return Array.from(unique);
};
//console.log(f1(films));

// 2. Собрать в массив всех актеров всех фильмов (без
// повторения)

const f2 = (arr: MovieInfo[]): string[] => {
  const arr2: string[] = arr
    .map((item) => item.actors)
    .reduce((accum, curr) => accum.concat(curr));

  const unique: Set<string> = new Set(arr2);

  return Array.from(unique);
};
//console.log(f2(films));

// 3. Отсортировать фильмы по рейтингу по убыванию

const f3 = (arr: MovieInfo[]): MovieInfo[] => {
  const sorted = [...arr].sort((a, b) => b.imdbRating - a.imdbRating);

  return sorted;
};
//console.log(f3(films));

// 4. Создать новый массив, где объекты фильмов будут состоять
// из следующих полей:
//  id, title, released, plot

type Film = {
  id: number;
  title: string;
  released: string;
  plot: string;
};

const f4 = (arr: MovieInfo[]): Film[] => {
  const arr4 = arr.map((film) => ({
    id: film.id,
    title: film.title,
    released: film.released,
    plot: film.plot,
  }));

  return arr4;
};
//console.log(f4(films));

// 5. Создать функцию, которая бы принимала массив фильмов и
// число. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где число равно году
// выхода фильма.

const f5 = (arr: MovieInfo[], year: number): MovieInfo[] => {
  const arr5 = arr.filter((film) => film.year === year);

  return arr5;
};

//console.log(f5(films, 2001));

// 6. Создать функцию, которая бы принимала массив фильмов и
// строку. А результатом этой функции должен быть новый
// отфильтрованный массив, с фильмами, где строка входит в
// название фильма.

const f6 = (arr: MovieInfo[], str: string): MovieInfo[] => {
  const arr6 = arr.filter((film) => film.title.toLowerCase().includes(str));

  return arr6;
};

//console.log(f6(films, 'pot'));

// 7. Создать функцию, которая бы принимала массив фильмов и
// строку. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где строка входит в
// название фильма или в его сюжет.

const f7 = (arr: MovieInfo[], str: string): MovieInfo[] => {
  const arr7 = arr.filter(
    (film) =>
      film.title.toLowerCase().includes(str) ||
      film.plot.toLowerCase().includes(str)
  );

  return arr7;
};

//console.log(f7(films, 'dark'));

// 8. Создать функцию, которая бы принимала 3 параметра:
// 1)массив фильмов , 2) строка(название поля, например 'title') и
// строку/число(значение поля "Black Widow"). А результатом
// этой функции должен быть отфильтрованный массив, где
// параметры 2 и 3 равны в объекте фильма. Например:
// передаем (films, 'title', 'Black Widow') и на выходе получаем
// фильм с id=1 если передаем (films, 'year', 2011) , то получаем
// фильм с id=2

const f8 = (
  arr: MovieInfo[],
  field: string,
  value: string | number
): MovieInfo[] => {
  const arr8 = arr.filter((film) => film[field as keyof MovieInfo] === value);

  return arr8;
};

//console.log(f8(films, 'year', 2011));
