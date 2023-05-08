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
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div className="App"></div>;
}

export default App;
