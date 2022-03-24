import { films, MovieInfo } from './data';
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
