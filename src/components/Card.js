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
              <div className="card">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                  alt={item.name}
                />
                <div className="number">#{item.id}</div>
                <div className="name">{item.name}</div>
                {/* <div className="type">{item.types.type.name}</div> */}
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
