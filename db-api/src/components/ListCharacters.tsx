import { useEffect, useState } from "react";
import { getCharacters } from "../api/getCharacters";
import type { Item } from "../interfaces/characters";

export const ListCharacters = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getCharacters().then((charactes) => {
      console.log("charactes", JSON.stringify(charactes, null, 2));
      setData(charactes);
    });
  }, []);

  return (
    <div>
      {data.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>Raza: {character.race}</p>
          <p>Ki: {character.ki}</p>
          <p>Género: {character.gender}</p>
          <img src={character.image} alt={character.name} width="200" />
        </div>
      ))}
    </div>
  );
};
