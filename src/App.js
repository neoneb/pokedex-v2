import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResultModal from './components/SearchResultModal';

function App() {
  const [pokemonData, setPokemonData] = useState({
    pokemon: {},
  });

  const [showModal, setShowModal] = useState(false);

  const fetchPokemon = async function (searchValue) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchValue}/`
      );
      const data = await response.json();
      setPokemonData({
        pokemon: data,
      });
      console.log(pokemonData);
    } catch (err) {
      setShowModal(false);
      console.log('Pokemon not Found!', err);
    }
  };

  return (
    <div>
      <SearchBar fetchPokemon={fetchPokemon} setShowModal={setShowModal} />
      {showModal && <SearchResultModal state={pokemonData} />}
    </div>
  );
}

export default App;
