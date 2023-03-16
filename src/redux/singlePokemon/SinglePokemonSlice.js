import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

export const getSinglePokemon = createAsyncThunk('pokemons/getSinglePokemon', async (type) => {
  const response = await fetch(`${type}?offset=0&limit=10`);
  const data = await response.json();
  const limitedPokemons = data.pokemon.slice(0, 10);
  return limitedPokemons;
});

export const getPokemonDetails = createAsyncThunk('pokemons/getPokemonDetails', async (pokemons) => {
  const pokemonsPromises = pokemons.map(async (pokemon) => {
    const response = await fetch(pokemon.pokemon.url);
    const data = await response.json();
    return data;
  });

  const pokemonDetails = await Promise.all(pokemonsPromises);
  return pokemonDetails;
});

const initialState = {
  pokemons: [],
  pokemonDetails: [],
  error: false,
  isLoading: false,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getSinglePokemon.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(getSinglePokemon.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      pokemons: action.payload,
    }))
    .addCase(getSinglePokemon.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }))
    .addCase(getPokemonDetails.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(getPokemonDetails.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      pokemonDetails: action.payload,
    }))
    .addCase(getPokemonDetails.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
});
