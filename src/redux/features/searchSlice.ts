import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Pokemon } from "@/types";


interface SearchPokemonState {
    search: string;
    startupPokemon: Pokemon[]
}

const initialState: SearchPokemonState = {
    search: '',
    startupPokemon: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setStartUpPokemon : (state, action: PayloadAction<Pokemon[]>) => {
            state.startupPokemon = action.payload;
        }
    }
})

export const { setSearch, setStartUpPokemon } = searchSlice.actions;
export default searchSlice.reducer;