import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResultModal from './components/SearchResultModal';

function App() {
  const [state, setState] = useState({
    pokemon: {},
  });

  const fetchPokemon = async function (searchValue) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchValue}/`
      );
      const data = await response.json();
      setState({
        pokemon: data,
      });
      console.log(state);
    } catch (err) {
      console.log('Pokemon not Found!', err);
    }
  };

  return (
    <div>
      <SearchBar fetchPokemon={fetchPokemon} />
      <SearchResultModal state={state} />
    </div>
  );
}

export default App;
