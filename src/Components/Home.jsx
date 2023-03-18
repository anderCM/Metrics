import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CategoryIcon from '@mui/icons-material/Category';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import { getPokemonTypes } from '../redux/pokemons/PokemonSlice';
import Searchbar from './Searchbar';
import Loading from './Loading';

const Home = () => {
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const { types, filteresType, isLoading } = useSelector((store) => store.types);
  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  const getbgColor = (index) => {
    const evenRow = Math.floor(index / 2) % 2 === 0;
    const evenColumn = index % 2 === 0;
    if (evenRow) {
      return evenColumn ? 'bg-category1' : 'bg-category2';
    }
    return evenColumn ? 'bg-category2' : 'bg-category1';
  };

  return (
    <>
      <div className="py-1 flex justify-between">
        <MenuIcon className="mx-2 text-white" />
        <h3 className="text-center text-white font-thin">Pokemons</h3>
        <button type="button" onClick={() => setSearch(!search)}>
          {!search ? <SearchIcon className="mx-2 text-white" /> : <CloseIcon className="mx-2 text-white" />}
        </button>
      </div>
      <div className="bg-secondaryBlue grid grid-cols-2 h-40">
        <div className="relative">
          <CatchingPokemonIcon className="absolute right-0 bottom-1/8 text-iconBlue animate-pulse" sx={{ fontSize: 150 }} />
        </div>
        <div className="flex flex-col justify-center text-white">
          <p className="mx-5 font-bold text-xl">POKEMONS</p>
          <p className="mx-5">
            {filteresType.length}
            {' '}
            types
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-subTitle">
        <p className="text-white text-sm px-2 my-1">POKEMONS BY TYPE</p>
        {search && <Searchbar />}
      </div>
      {isLoading && <Loading />}
      {filteresType.length <= 0 ? <p className="text-white text-center font-bold min-h-screen">No types</p> : (
        <div className="min-h-screen">
          <div className="grid grid-cols-2 gap-0">
          {filteresType.map((type, index) => (
            <Link
              className={`${getbgColor(index)} pb-4 relative`}
              key={type.name}
              to={`/pokemons/${type.name}`}
              state={type.url}
            >
              <div className="flex flex-col gap-4">
                <CategoryIcon className="text-iconBlue mx-auto" sx={{ fontSize: 100 }} />
                <div className="text-right text-white mr-2">
                  <p className="font-bold -mb-2">{type.name.toUpperCase()}</p>
                  <p>10</p>
                </div>
              </div>
              <ArrowCircleRightOutlinedIcon className="text-white absolute top-1 right-1" />
            </Link>
          ))}
        </div>
        </div>
      )}

    </>
  );
};

export default Home;
