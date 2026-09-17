import type { Item } from "../interfaces/characters";

import styles from "../assets/css/SelectCharacter.module.css";

interface Props {
  character: Item;
  onBack: () => void;
}

export const SelectCharacters = ({ character, onBack }: Props) => {
  return (
    <div className={styles.detail}>
      <button onClick={onBack}>Volver</button>
      <img src={character.image} alt={character.name} />
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
        <b>Máximo Ki:</b> {character.maxKi}
      </p>
      <p>
        <b>Afiliación:</b> {character.affiliation}
      </p>
      <p>{character.description}</p>
    </div>
  );
};
