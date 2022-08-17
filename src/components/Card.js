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
                <img src={item.sprites.front_default} alt="" />
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
