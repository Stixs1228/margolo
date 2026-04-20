const fs = require("fs");

const genres = [
  "боевик", "комедия", "драма", "фантастика",
  "ужасы", "триллер", "мелодрама", "приключения"
];

const adjectives = [
  "Последний", "Тёмный", "Забытый", "Неудержимый", "Секретный",
  "Красный", "Золотой", "Ледяной", "Быстрый", "Дикий"
];

const nouns = [
  "воин", "город", "мир", "путь", "охотник",
  "призрак", "код", "огонь", "шторм", "мститель"
];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const movies = [];

for (let i = 1; i <= 3000; i++) {
  const title = `${random(adjectives)} ${random(nouns)}`;
  const genre = random(genres);

  movies.push({
    id: i,
    title,
    genre
  });
}

fs.writeFileSync("movies.json", JSON.stringify(movies, null, 2), "utf-8");

console.log("Готово! movies.json создан");