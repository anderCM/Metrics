import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonTypes } from '../redux/pokemons/PokemonSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { types } = useSelector((store) => store.types);
  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);
  
  return (
    <>
      <h3 className="text-center py-3 text-white font-thin md:font-bold md:text-xl">Pokemons</h3>
      <div className="bg-gradient-to-r from-black to-blue-700 opacity-50">
        <img className="max-h-60 md:max-h-80 hover:max-h-screen mx-auto" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png" alt="Charizard Pokemon" />
      </div>
      <p className="text-white text-sm">POKEMONS BY TYPE</p>
      {types.length < 0 ? <p>No types</p> : (
        <div className="grid grid-cols-2 grid-flow-row gap-0">
            {types.map((type) => (
                <div key={type.name}>{type.name}</div>
            ))}
        </div>
      )}
      
    </>
  );
};

export default Home;
