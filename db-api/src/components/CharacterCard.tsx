import type { Item } from "../interfaces/characters";
import styles from "../assets/css/CharacterCard.module.css";

interface Props {
  character: Item;
}

export const CharacterCard = ({ character }: Props) => {
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
          <b>Raza:</b>
          {character.race}
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
    </div>
  );
};
