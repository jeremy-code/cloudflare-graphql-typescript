import { RESTDataSource } from "apollo-datasource-rest";

import type { Pokemon } from "../types";

export class PokemonAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://pokeapi.co/api/v2/";
	}

	async getPokemon(id: string): Promise<Pokemon> {
		return this.get(`pokemon/${encodeURIComponent(id)}`);
	}
}
