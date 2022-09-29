/*Exercise: 
Change the code below so that the "loadPokemon" function is only executed 
when the app component is rendered.

Hint: Don't forget the dependency array!
*/

import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon")

useEffect(()=>{
  loadPokemon()
},[])

  async function loadPokemon() {
    try {
      const response = await fetch(nextUrl);
      const data = await response.json();
      setPokemon(data.results);
      setNextUrl(data.next);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="App">
      <button onClick={loadPokemon}>Load Pokémon</button>
      <button onClick={loadPokemon}>Load Next 20 Pokémon</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
