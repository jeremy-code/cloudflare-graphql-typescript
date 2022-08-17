import { PokemonAPI } from "../datasources/PokemonAPI";

interface PokemonSprites {
	front_default: string;
	front_shiny: string;
	front_female?: string;
	front_shiny_female?: string;
	back_default: string;
	back_shiny: string;
	back_female?: string;
	back_shiny_female?: string;
}

export interface Pokemon {
	id: number;
	name: string;
	height: number;
	weight: number;
	sprites: PokemonSprites;
}

export interface DataSources {
	pokemonAPI: PokemonAPI;
}

export interface Context {
	dataSources: DataSources;
}
