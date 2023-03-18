import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import pokemonsTypeReducer from './pokemons/PokemonSlice';
import pokemonsReducer from './singlePokemon/SinglePokemonSlice';

const rootReducer = combineReducers({ types: pokemonsTypeReducer, pokemons: pokemonsReducer });
const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

export default store;
