import pokemonsTypeReducer, { filterPokemonsType, getPokemonTypes } from '../redux/pokemons/PokemonSlice';

describe('Test suit for pokemonsTypeReducer', () => {
  it('Should be the same initial state', () => {
    const initialState = {
      types: [],
      error: false,
      isLoading: false,
      filteresType: [],
    };
    expect(pokemonsTypeReducer(undefined, {})).toEqual(initialState);
  });

  it('Should filter pokemon by name', () => {
    const initialState = {
      types: [
        { name: 'fire', url: 'someurl' },
        { name: 'grass', url: 'someurl' },
        { name: 'electric', url: 'someurl' },
      ],
      error: false,
      isLoading: false,
      filteresType: [],
    };

    const action = filterPokemonsType('elec');

    expect(pokemonsTypeReducer(initialState, action)).toEqual({
      ...initialState,
      filteresType: [
        { name: 'electric', url: 'someurl' },
      ],
    });
  });
  it('Should return fullfiled status', () => {
    const initialState = {
      types: [],
      error: false,
      isLoading: false,
      filteresType: [],
    };

    const action = {
      type: getPokemonTypes.fulfilled.type,
      payload: [
        { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
        { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
        { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
      ],
    };
    expect(pokemonsTypeReducer(initialState, action)).toEqual({
      ...initialState,
      types: action.payload,
      filteresType: action.payload,
    });
  });
});
