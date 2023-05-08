import "./App.css";
import { useState } from "react";

function App() {
  /* 2. Add state for pokemon names */
  const [pokemonNames, setPokemonNames] = useState([]);

  /* 1. Add API call function made with fetch */
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response)
        /* 3. Store pokemon names from response*/
        const names = response.results.map(pkm => pkm.value)
        /* 4. Store in useState hook */
        setPokemonNames(names)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <div>
        {pokemonNames.map((pkmname, idx) => (
          <p key={idx}>{pkmname}</p>
        ))}
      </div>
    </div>
  )
}

export default App;
