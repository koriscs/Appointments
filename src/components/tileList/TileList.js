import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = (props) => {
  
  const {contactsData} = props
  return (
    <div>
      {contactsData && contactsData.map((contacts, index ) => (<Tile contacts={contacts} key={index}/>))}
    </div>
  );
};
