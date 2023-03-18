import { createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit';

import url from '../../Constans/Url';

export const getPokemonTypes = createAsyncThunk('pokemons/getPokemonTypes', async () => {
  const response = await fetch(`${url}/type`);
  const data = await response.json();
  return data.results;
});

const initialState = {
  types: [],
  error: false,
  isLoading: false,
  filteresType:[],
};

const pokemonsTypeReducer = createSlice({
  name: 'pokemons',
  initialState,
  reducers:{
    filterPokemonsType: (state, action) => {
      const searchType = action.payload.toLowerCase();
      const filtered = state.types.filter((type) => {
        return type.name.includes(searchType);
      });
      return {
        ...state,
        filteresType: filtered
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonTypes.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getPokemonTypes.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        types: action.payload,
        filteresType: action.payload,
      }))
      .addCase(getPokemonTypes.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  }
});

export const { filterPokemonsType } = pokemonsTypeReducer.actions;
export default pokemonsTypeReducer.reducer;

/* export default createReducer(initialState, (builder) => {
  builder
    .addCase(getPokemonTypes.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(getPokemonTypes.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      types: action.payload,
    }))
    .addCase(getPokemonTypes.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
}); */
