import { useEffect, useState } from "react";
import { getCharacters } from "../api/getCharacters";
import type { Item } from "../interfaces/characters";
import { CharacterCard } from "./CharacterCard";
import styles from "../assets/css/ListCharacters.module.css";

export const ListCharacters = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getCharacters()
      .then((characters) => {
        setData(characters);
      })
      .catch((e) => {
        setError(e || "Error al cargar los personajes");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Cargando personajes...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <span className={styles.error}>{error}</span>
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No se encontraron personajes.</p>
      </div>
    );
  }
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
