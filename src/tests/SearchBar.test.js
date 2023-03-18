import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Searchbar from '../Components/Searchbar';
import { filterPokemonsType } from '../redux/pokemons/PokemonSlice';

const mockStore = configureStore([]);

describe('Searchbar', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      types: [{ name: 'fire' }, { name: 'water' }],
      error: false,
      isLoading: false,
      filteresType: [{ name: 'fire' }, { name: 'water' }],
    });
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <Searchbar />
      </Provider>,
    );
  });

  it('should dispatch filterPokemonsType action on input change', () => {
    const input = component.getByPlaceholderText('Search here');
    fireEvent.change(input, { target: { value: 'f' } });

    expect(store.dispatch).toHaveBeenCalledWith(filterPokemonsType('f'));
  });
});
