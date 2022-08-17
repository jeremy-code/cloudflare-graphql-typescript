import type { Context, Pokemon } from "../types";

const pokemonResolver = {
	Query: {
		pokemon: async (
			_source: unknown,
			args: {
				id: string;
			},
			{ dataSources }: Context
		): Promise<Pokemon> => {
			return dataSources.pokemonAPI.getPokemon(args.id);
		},
	},
};

export default pokemonResolver;
