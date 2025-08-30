import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";

import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStorage = (): FavoritePokemon[] => {
	const favoritesPokemons = JSON.parse(
		localStorage.getItem("favoritePokemons") ?? "[]"
	);

	return favoritesPokemons;
};

export const FavoritePokemons = () => {
	const [pokemons, setPokemons] = createSignal<FavoritePokemon[]>(
		getLocalStorage()
	);
	return (
		<div class="grid grid-cols-2 sm:grid-cols-4">
			<For each={pokemons()}>
				{(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
			</For>
		</div>
	);
};
