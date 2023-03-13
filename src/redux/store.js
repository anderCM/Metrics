import { configureStore, combineReducers } from '@reduxjs/toolkit';

import pokemonsTypeReducer from './pokemons/PokemonSlice';

const rootReducer = combineReducers({ types: pokemonsTypeReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
