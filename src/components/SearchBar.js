import { useState } from 'react';

function SearchBar({ fetchPokemon, setShowModal }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(query.toLocaleLowerCase());
    e.target.searchInput.value = '';
    setQuery('');
    setShowModal(true);
  };

  const handleClick = (e) => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    fetchPokemon(randomId);
    setShowModal(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search a Pokemon...'
          className='input'
          name='searchInput'
        />
        <button>Search</button>
      </form>
      <button onClick={handleClick}>Random</button>
    </div>
  );
}

export default SearchBar;
