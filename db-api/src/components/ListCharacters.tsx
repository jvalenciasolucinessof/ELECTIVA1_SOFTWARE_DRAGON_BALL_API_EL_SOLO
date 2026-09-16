import { useEffect, useState } from "react";
import { getCharacters } from "../api/getCharacters";
import type { Item } from "../interfaces/characters";
import { CharacterCard } from "./CharacterCard";
import styles from "../assets/css/ListCharacters.module.css";

export const ListCharacters = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setData(characters);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Personajes</h1>

      <div className={styles.grid}>
        {data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
