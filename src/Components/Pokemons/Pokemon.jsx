import PropTypes from 'prop-types';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Pokemon = ({
  index, image, pokemon, moves,
}) => (
  <div className={`${index % 2 === 0 ? 'bg-category1' : 'bg-category2'} h-20 flex justify-between`}>
    <div className="ml-2 flex items-center">
      <img src={image} alt={pokemon} className="max-h-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
      <p className="text-white font-semibold">{pokemon.replace(/^\w/, (c) => c.toUpperCase())}</p>
    </div>
    <div className="flex mr-2 items-center gap-4">
      <p className="text-white">
        {moves}
        {' '}
        moves
      </p>
      <ArrowCircleRightOutlinedIcon className="text-white" />
    </div>

  </div>
);

Pokemon.propTypes = {
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  pokemon: PropTypes.string.isRequired,
  moves: PropTypes.number.isRequired,
};

export default Pokemon;
