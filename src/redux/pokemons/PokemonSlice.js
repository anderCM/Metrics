import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

const url = 'https://pokeapi.co/api/v2/type';

export const getPokemonTypes = createAsyncThunk('pokemons/getPokemonTypes', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
});

const initialState = {
  types: [],
  error: false,
  isLoading: false,
};

export default createReducer(initialState, (builder) => {
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
});
