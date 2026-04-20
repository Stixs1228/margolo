const express = require("express");
const app = express();

app.use(express.static(__dirname));

const movies = [
  { title: "Форсаж", genre: "боевик" },
  { title: "Джон Уик", genre: "боевик" },
  { title: "Один дома", genre: "комедия" },
  { title: "Мальчишник в Вегасе", genre: "комедия" },
  { title: "Заклятие", genre: "ужасы" },
  { title: "Астрал", genre: "ужасы" }
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});