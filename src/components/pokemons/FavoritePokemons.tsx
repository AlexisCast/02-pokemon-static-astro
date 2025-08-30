import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";

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
				{(pokemon) => (
					<div class="m-2 flex flex-col items-center justify-center">
						<span class="capitalize">{pokemon.name}</span>
					</div>
				)}
			</For>
		</div>
	);
};
