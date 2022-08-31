import React from "react";

const Card = ({ pokemon, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Chargement...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className="card" key={item.id}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                  alt={item.name}
                />
                <div className="number">#{item.id}</div>
                <div className="name">{item.name}</div>
                <div className="abilities">
                  {item.abilities.map((poke) => {
                    return (
                      <>
                        <div className="ability">{poke.ability.name}</div>
                      </>
                    );
                  })}
                </div>

                <div className="base-stat">
                  {item.stats.map((poke) => {
                    return (
                      <>
                        <h4>
                          {poke.stat.name}: {poke.base_stat}
                        </h4>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
