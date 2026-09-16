import type { Item } from "../interfaces/characters";


export const getCharacters = async (): Promise<Item[]> => {

    const baseUrl = 'https://dragonball-api.com/api/characters?limit=20';
    const response = await fetch(baseUrl);
    const { items } = await response.json();
    return items;
}