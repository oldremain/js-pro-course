## Homework 36

> **_Array Exapmle_**

```js
 [
 {
id: 1
title: "Black Widow",
year: 2021,
released: "09 Jul 2021",
runtime: "134 min",
genre: ["Action", "Sci-Fi",
"Adventure"],
director: "Cate Shortland",
writer: "Eric Pearson, Jac
Schaeffer, Ned Benson",
actors: ["Scarlett Johansson",
"Florence Pugh", "David Harbour"],
plot: "Natasha Romanoff
confronts the darker parts of her ledger when a dangerous conspiracy
with ties to her past arises.",
country: "United States",
poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3Ym
IwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
imdbRating: 6.9,
imdbVotes: 121932,
type: "movie",
boxOffice: "$138,027,361",
production: "Marvel Studios",
 },
...
 ]
```

### **_C массивом фильмов (Homework_36.md) сделать следующий задачи, используя map/reduce вместо for, forEach:_**

1. Собрать в массив все жанры фильмов (без повторения)
2. Собрать в массив всех актеров всех фильмов (без
   повторения)
3. Отсортировать фильмы по рейтингу по убыванию
4. Создать новый массив, где объекты фильмов будут состоять
   из следующих полей:
   id, title, released, plot
5. Создать функцию, которая бы принимала массив фильмов и
   число. А результатом этой функции должен быть
   отфильтрованный массив, с фильмами где число равно году
   выхода фильма.
6. Создать функцию, которая бы принимала массив фильмов и
   строку. А результатом этой функции должен быть новый
   отфильтрованный массив, с фильмами, где строка входит в
   название фильма.
7. Создать функцию, которая бы принимала массив фильмов и
   строку. А результатом этой функции должен быть
   отфильтрованный массив, с фильмами где строка входит в
   название фильма или в его сюжет.
8. Создать функцию, которая бы принимала 3 параметра:
   1)массив фильмов , 2) строка(название поля, например 'title') и
   строку/число(значение поля "Black Widow"). А результатом
   этой функции должен быть отфильтрованный массив, где
   параметры 2 и 3 равны в объекте фильма. Например:
   передаем (films, 'title', 'Black Widow') и на выходе получаем
   фильм с id=1 если передаем (films, 'year', 2011) , то получаем
   фильм с id=2
