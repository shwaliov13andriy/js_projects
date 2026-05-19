"use strict";
fetch("https://pokeapi.co/api/v2/pokemon?limit=1")
  .then(r => r.json())
  .then(d => console.log(d.count));
