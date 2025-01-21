
const TOTAL_POKEMONS = 10;
const TOTAL_PAGES = 5;

(async () => {
  const fs = require('fs');

  // Generate list routes
  const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
  let fileContent = pokemonIds.map(
    id => `/pokemons/${id}`
  ).join('\n');

  // Generate single page routes
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    fileContent += `\n/pokemons/page/${i}`;
  }

  // Generate name pages routes
  const pokemonsNames = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
  .then(response => response.json());

  fileContent += '\n';
  fileContent += pokemonsNames.results.map(
    pokemon => `/pokemons/${pokemon.name}`
  ).join('\n');

  fs.writeFileSync('routes.txt', fileContent);

  console.log('routes.txt generated');
})();
