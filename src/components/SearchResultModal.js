import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function SearchResultModal({ state, onClose }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const { name, id, height, weight } = state.pokemon; // eslint-disable-line
  const typesArray = state.pokemon.types;
  const pokemon = state.pokemon;
  const types = typesArray.map((type) => type.type.name).join(', ');
  const abilitiesArray = state.pokemon.abilities;
  const abilities = abilitiesArray
    .slice(0, 2)
    .map((ability) => ability.ability.name)
    .join(', ');

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-gray-300 opacity-80'
      ></div>
      <div className='fixed inset-40 p-10 bg-white'>
        <div>{pokemon.name}</div>
        <div># {pokemon.id}</div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={state.pokemon.name}
        />
        <div>Type: {types}</div>
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
        <div>Abilities: {abilities}</div>
      </div>
    </div>,

    document.querySelector('.modal-container')
  );
}

export default SearchResultModal;
