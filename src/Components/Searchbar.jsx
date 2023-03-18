import { useDispatch } from 'react-redux';
import { filterPokemonsType } from '../redux/pokemons/PokemonSlice';

const Searchbar = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      className="bg-subTitle focus:outline-0 text-white"
      placeholder="Search here"
      onChange={(e) => dispatch(filterPokemonsType(e.target.value))}
    />
  );
};

export default Searchbar;
