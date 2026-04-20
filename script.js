let movies = [
  { name: "Форсаж", genres: ["боевик"] },
  { name: "Мстители", genres: ["боевик", "фантастика"] },
  { name: "Один дома", genres: ["комедия"] },
  { name: "Маска", genres: ["комедия"] },
  { name: "Заклятие", genres: ["ужасы"] },
  { name: "Пила", genres: ["ужасы", "триллер"] }
];

function findMovies() {
  let input = document.getElementById("search").value.toLowerCase();
  let resultDiv = document.getElementById("results");

  resultDiv.innerHTML = "";

  let filtered = movies.filter(movie =>
    movie.genres.some(g => input.includes(g))
  );

  if (filtered.length === 0) {
    resultDiv.innerHTML = "<p>❌ Ничего не найдено</p>";
    return;
  }

  filtered.forEach(movie => {
    let div = document.createElement("div");
    div.className = "movie";
    div.innerText = movie.name;
    resultDiv.appendChild(div);
  });
}