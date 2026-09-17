import type { Item } from "../interfaces/characters";

export const getCharacters = async (): Promise<Item[]> => {
  const baseUrl = "https://dragonball-api.com/api/characters?limit=20";
  const response = await fetch(baseUrl);
  const { items } = await response.json();
  if (!response.ok) {
    throw new Error("Error al obtener los personajes");
  }
  return items;
};
