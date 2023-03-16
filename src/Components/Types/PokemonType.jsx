import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { getSinglePokemon, getPokemonDetails } from '../../redux/singlePokemon/SinglePokemonSlice';
import Loading from '../Loading';
import Back from '../Back';

const PokemonType = () => {
  const { type } = useParams();
  const location = useLocation();
  const url = location.state;

  const dispatch = useDispatch();
  const { pokemons, isLoading } = useSelector((store) => store.pokemons);

  useEffect(() => {
    dispatch(getSinglePokemon(url));
  }, [dispatch, url]);

  useEffect(() => {
    if (pokemons.length > 0) {
      dispatch(getPokemonDetails(pokemons));
    }
  }, [dispatch, pokemons]);
  return (
    <>
      <div className="py-1 mx-2 flex justify-between">
        <Back />
        <p className="text-white font-thin">PokemonType</p>
        <KeyboardVoiceIcon className="text-white" />
      </div>
      <div className="bg-secondaryBlue grid grid-cols-2 h-40">
        <div className="relative">
          <CatchingPokemonIcon className="absolute right-0 bottom-1/8 text-iconBlue" sx={{ fontSize: 150 }} />
        </div>
        <div className="flex flex-col text-end justify-center text-white">
          <p className="mx-2 font-bold text-xl">{type.toUpperCase()}</p>
          <p className="mx-2">
            {' '}
            types
          </p>
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default PokemonType;
