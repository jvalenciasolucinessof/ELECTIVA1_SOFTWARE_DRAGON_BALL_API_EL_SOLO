import type { Item } from "../interfaces/characters";

import styles from "../assets/css/CharacterCard.module.css";

interface Props {
  character: Item;
  onSelect: (character: Item) => void;
  marked: boolean;
  onMarked: (id: number) => void;
}

export const CharacterCard = ({
  character,
  onSelect,
  marked,
  onMarked,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2>{character.name}</h2>

        <p>
          <b>Raza:</b> {character.race}
        </p>

        <p>
          <b>Género:</b> {character.gender}
        </p>

        <p>
          <b>Ki:</b> {character.ki}
        </p>

        <p>
          <b>Afiliación:</b> {character.affiliation}
        </p>
      </div>

      <button className={styles.button} onClick={() => onSelect(character)}>
        Ver más
      </button>
      <button
        className={marked ? styles.buttonMarked : styles.button}
        onClick={() => onMarked(character.id)}
      >
        {marked ? "Desmarcar" : "Marcar"}
      </button>
    </div>
  );
};
