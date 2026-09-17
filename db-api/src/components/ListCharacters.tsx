import { useEffect, useState } from "react";

import { getCharacters } from "../api/getCharacters";
import type { Item } from "../interfaces/characters";

import { CharacterCard } from "./CharacterCard";
import { InputSearch } from "./InputSearch";
import { SelectCharacters } from "./SelectCharacters";

import styles from "../assets/css/ListCharacters.module.css";

export const ListCharacters = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const [selectedCharacter, setSelectedCharacter] =
    useState<Item | null>(null);

  useEffect(() => {
    getCharacters()
      .then((characters) => {
        setData(characters);
      })
      .catch(() => {
        setError("Error al cargar los personajes");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const charactersFiltered = data.filter((character) =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

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

  if (selectedCharacter) {
    return (
      <SelectCharacters
        character={selectedCharacter}
        onBack={() => setSelectedCharacter(null)}
      />
    );
  }

  return (
    <div className={styles.container}>
      <h1>Personajes</h1>

      <InputSearch onSearch={setFilter} />

      {charactersFiltered.length === 0 ? (
        <p>No se encontraron personajes.</p>
      ) : (
        <div className={styles.grid}>
          {charactersFiltered.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onSelect={setSelectedCharacter}
            />
          ))}
        </div>
      )}
    </div>
  );
};