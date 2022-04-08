import React from "react";

export const Tile = ({contacts, index}) => {

  const values = Object.values(contacts);
  return (
    <div className="tile-container">
        {values.map((elements, i) => (
          i === 0 ? <p className="tile-title" key={i} >{elements}</p> : <p className="tile" key={i} >{elements}</p>
        )
        )}
    </div>
  );
};
