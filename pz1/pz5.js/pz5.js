"use strict";
console.log("Підключено JavaScript для Практичної роботи #5");

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("HTTP error " + response.status);

    const data = await response.json();
    const output = document.getElementById("usersOutput");
    output.innerHTML = data.map(user => 
      `<p><strong>${user.name}</strong> (${user.email})</p>`
    ).join("");
  } catch (error) {
    console.error("Error fetching users:", error);
    document.getElementById("usersOutput").textContent =
      "error loading users!";
  }
}
async function loadPokemon() {
  try {
    const pokemonName = prompt("Tyep name or id of pokemon:");
    if (!pokemonName || pokemonName.trim() === "") {
      alert("Type right name or id!");
      return;
    }

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    if (!response.ok) throw new Error("Pokémon not found!");

    const data = await response.json();
    const stats = {};
    data.stats.forEach(stat => {
      stats[stat.stat.name] = stat.base_stat;
    });

    const card = `
      <div class="pokemon-card">
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <h2>${data.name.toUpperCase()}</h2>
        <p><strong>id:</strong> ${data.id}</p>
        <p><strong>type:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>hp:</strong> ${stats.hp}</p>
        <p><strong>attack:</strong> ${stats.attack}</p>
        <p><strong>defence:</strong> ${stats.defense}</p>
        <p><strong>speed:</strong> ${stats.speed}</p>
        <p><strong>rarirty:</strong> ${data.base_experience}</p>
         <p><strong>special-attack:</strong> ${stats["special-attack"]}</p>
      </div>
    `;
    document.getElementById("pokemonCard").innerHTML = card;

  } catch (error) {
    console.error("Error:", error);
    document.getElementById("pokemonCard").innerHTML =
      "<p style='color:red'>error: pockemon not found</p>";
  }
}
document.getElementById("loadUsers").addEventListener("click", loadUsers);
document.getElementById("loadPokemon").addEventListener("click", loadPokemon);


//<p><strong>special-attack:</strong> ${stats["special-attack"]}</p>