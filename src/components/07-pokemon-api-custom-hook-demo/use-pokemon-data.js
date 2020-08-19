const { useState, useEffect } = require("react");

function usePokemonData(pokemonNumber) {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;

  useEffect(() => {
    if (pokemonNumber === null) {
      return;
    }

    if (!Number.isInteger(pokemonNumber)) {
      setIsFetching(false);
      setError(new Error("Pokemon number is not an integer."));
      setPokemonData(null);
      return;
    }

    const run = async () => {
      try {
        setIsFetching(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response not ok.");
        }
        const json = await response.json();
        setPokemonData(json);
      } catch (err) {
        setError(err);
        setPokemonData(null);
        console.error(err);
      } finally {
        setIsFetching(false);
      }
    };

    run();
  }, [pokemonNumber, url]);

  return [pokemonData, isFetching, error];
}

export default usePokemonData;
