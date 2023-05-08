import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        const names = response.data.results.map(pkm => pkm.name)
        setPokemonNames(names)
      })
      .catch((err) => {
        console.log(err)
      })
  };
  return (
    <div className="App">
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonNames.map((name, index) => {
          console.log(name)
          return <li key={index}>{name}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
