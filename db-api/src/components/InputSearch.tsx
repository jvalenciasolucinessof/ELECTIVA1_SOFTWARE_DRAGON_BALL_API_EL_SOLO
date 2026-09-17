import { useEffect, useState } from "react";
import styles from "../assets/css/InputSearch.module.css";

interface Props {
  onSearch: (value: string) => void;
}

export const InputSearch = ({ onSearch }: Props) => {
    const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(search);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [search, onSearch]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Buscar personaje"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
