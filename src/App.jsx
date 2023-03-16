import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import PokemonType from './Components/Types/PokemonType';

function App() {
  return (
    <div className="App bg-mainBlue max-w-md mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons/:type" element={<PokemonType />} />
      </Routes>
    </div>
  );
}

export default App;
