import React from "react";
import { store } from "@/redux";
import PokemonTable from "./PokemonTable";

function SSRPokemonTable() {
	return (
		<div>
			<PokemonTable pokemons={store.getState().search.startupPokemon}/>
		</div>
	);
}

export default SSRPokemonTable;
