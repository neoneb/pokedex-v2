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
      <div className='fixed inset-40 p-10 bg-white rounded-lg border-2 border-slate-700 flex flex-col'>
        <div className=''>
          <button onClick={onClose} className='absolute top-3 right-4'>
            X
          </button>
        </div>
        <div className=''>{pokemon.name}</div>
        <div className=''># {pokemon.id}</div>
        <img
          className=''
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={state.pokemon.name}
        />
        <div className=''>Type: {types}</div>
        <div className=''>Height: {pokemon.height}</div>
        <div className=''>Weight: {pokemon.weight}</div>
        <div className=''>Abilities: {abilities}</div>
      </div>
    </div>,

    document.querySelector('.modal-container')
  );
}

export default SearchResultModal;
