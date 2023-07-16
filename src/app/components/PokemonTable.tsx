import React from "react";
import { Pokemon } from "@/types";

function PokemonTable({ pokemons }: { pokemons: Pokemon[] }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{pokemons.map((pokemon, index) => {
					return (
						<tr key={index}>
							<td>{pokemon.name}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default PokemonTable;
