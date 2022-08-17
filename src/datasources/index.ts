import { PokemonAPI } from "./PokemonAPI";

const dataSources = () => ({
	pokemonAPI: new PokemonAPI(),
});

export default dataSources;
