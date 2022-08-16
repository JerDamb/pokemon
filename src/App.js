import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import axios from "axios";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  useEffect(() => {
    axios.get(loadMore).then((res) => setAllPokemons(res.data.results));
  }, []);

  // const getAllPokemons = () => {
  //   axios.get(loadMore).then((res) => setAllPokemons(res.data.results));
  //   const data = axios.get(loadMore).then((res) => setAllPokemons(res));

  //   setLoadMore(data.next);

  //   const createPokemonObject = (result) => {};
  //   createPokemonObject(data.result);
  // };

  return (
    <div className="home-container">
      <h1>Pokedex</h1>
      <Cards />
      <button className="load-more">Load more</button>
    </div>
  );
};

export default App;
