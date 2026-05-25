"use strict";

const moviesContainer = document.getElementById("movies");
const searchInput = document.getElementById("search");
const sortNameBtn = document.getElementById("sortName");
const sortRatingBtn = document.getElementById("sortRating");

let movies = [];

// 1. Отримання даних
async function fetchMovies() {
  try {
    const response = await fetch("https://api.tvmaze.com/shows");
    if (!response.ok) throw new Error("Помилка завантаження даних");
    movies = await response.json();
    displayMovies(movies);
  } catch (error) {
    moviesContainer.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}

// 2. Відображення даних
function displayMovies(data) {
  moviesContainer.innerHTML = "";
  data.forEach(({ name, image, rating, genres }) => {
    const card = `
      <div class="card">
        <img src="${image?.medium || ''}" alt="${name}">
        <h3>${name}</h3>
        <p>Жанри: ${genres.join(", ")}</p>
        <p>Рейтинг: ${rating?.average || "N/A"}</p>
      </div>
    `;
    moviesContainer.innerHTML += card;
  });
}

// 3. Фільтрація
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = movies.filter(m => m.name.toLowerCase().includes(query));
  displayMovies(filtered);
});

// 4. Сортування
sortNameBtn.addEventListener("click", () => {
  const sorted = [...movies].sort((a, b) => a.name.localeCompare(b.name));
  displayMovies(sorted);
});

sortRatingBtn.addEventListener("click", () => {
  const sorted = [...movies].sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
  displayMovies(sorted);
});

// Запуск
fetchMovies();
