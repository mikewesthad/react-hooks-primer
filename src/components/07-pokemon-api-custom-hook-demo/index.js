/**
 * A demo of how to create a custom hook (that uses the useEffect hook) to fetch data from the
 * Pokemon API.
 */

import React, { useState } from "react";
import usePokemonData from "./use-pokemon-data";

const PokemonDemo = () => {
  const [textNumber, setTextNumber] = useState("");
  const [pokemonNumber, setPokemonNumber] = useState(null);
  const [pokemonData, isFetching, error] = usePokemonData(pokemonNumber);
  const handleChange = (e) => setTextNumber(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(textNumber, 10);
    setPokemonNumber(num);
  };

  let pokemonContents;
  if (pokemonData) {
    const { id, name, height, weight, types } = pokemonData;
    pokemonContents = (
      <div>
        <div>
          {name} ({id})
        </div>
        <div>{height} decimetres</div>
        <div>{weight} hectograms</div>
        <div>{types.map((t) => t.type.name).join(", ")}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Pokemon (Use Effect Demo)</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" value={textNumber} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      <div>
        {isFetching && <p>Loading...</p>}
        {error && (
          <p>
            {error.name} : {error.message}
          </p>
        )}
        {pokemonContents}
      </div>
    </div>
  );
};

export default PokemonDemo;
