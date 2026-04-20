const fs = require("fs");

const adjectives = [
  "Последний", "Тёмный", "Забытый", "Неудержимый",
  "Секретный", "Красный", "Золотой"
];

const data = {
  ужасы: ["призрак", "шторм", "тень", "кровь"],
  комедия: ["город", "путь", "код", "друг"],
  боевик: ["мститель", "охотник", "солдат", "воин"],
  фантастика: ["робот", "галактика", "портал", "код"]
};

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const movies = [];

for (let i = 1; i <= 3000; i++) {
  const genre = random(Object.keys(data));
  const noun = random(data[genre]);
  const title = `${random(adjectives)} ${noun}`;

  const image = `https://picsum.photos/200/300?random=${i}`;

  movies.push({
    id: i,
    title,
    genre,
    image
  });
}

fs.writeFileSync("movies.json", JSON.stringify(movies, null, 2));

console.log("Готово! фильмы с картинками созданы");