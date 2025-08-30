import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
	pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
	const [isVisible, setIsVisible] = createSignal(true);

	const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

	const deleteFavorite = () => {
		const favorites = JSON.parse(
			localStorage.getItem("favoritePokemons") ?? "[]"
		) as FavoritePokemon[];

		const newFavorites = favorites.filter((fav) => fav.id !== pokemon.id);

		localStorage.setItem("favoritePokemons", JSON.stringify(newFavorites));

		setIsVisible(false);
	};

	return (
		<Show when={isVisible()}>
			<div class="flex flex-col justify-center items-center">
				<a href={`/pokemons/${pokemon.name}`}>
					<img
						src={imageSrc}
						alt={pokemon.name}
						width="96"
						height="96"
						style={`view-transition-name: ${pokemon.name}-image`} // from src/components/pokemons/PokemonCard.astro img transition:name={`${name}-image`}
					/>
					<p class="capitalize">
						#{pokemon.id} {pokemon.name}
					</p>
				</a>

				<button class="text-red-400" onClick={deleteFavorite}>
					Eliminate
				</button>
			</div>
		</Show>
	);
};
