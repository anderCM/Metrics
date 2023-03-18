import pokemonsReducer, { getSinglePokemon, getPokemonDetails} from '../redux/singlePokemon/SinglePokemonSlice';

describe('Test suit for pokemonsReducer', () => {
    it('Should return fullfiled status', () => {
        const initialState = {
            pokemons: [],
            pokemonDetails: [],
            error: false,
            isLoading: false,
          };
        const payload = [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}];
        const action = { type: getSinglePokemon.fulfilled.type, payload };
        const nextState = pokemonsReducer(initialState, action);
    
        expect(nextState).toEqual({
            pokemons: payload,
            pokemonDetails: [],
            error: false,
            isLoading: false,
        })
    });
})