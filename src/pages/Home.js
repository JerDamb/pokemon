import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();

  const pokeFunc = async () => {
    setLoading(true);
    const res = await axios.get(loadMore);
    setNextUrl(res.data.next);
    setPreviousUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (pokemon) => {
      const result = await axios.get(pokemon.url);
      setPokemonData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFunc();
  }, [loadMore]);

  return (
    <div className="home-container">
      <h2>Pokedex</h2>
      <div className="result">
        <Card
          pokemon={pokemonData}
          loading={Loading}
          // infoPokemon={(poke) => setPokeDex(poke)}
        />
      </div>
      <div className="btn-group">
        <button
          onClick={() => {
            setLoadMore(nextUrl);
          }}
        >
          Charger plus
        </button>
      </div>
    </div>
  );
};

export default Home;
