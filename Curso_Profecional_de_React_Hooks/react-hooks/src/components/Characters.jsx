import React, { useState, useEffect, useReducer } from 'react';
import './styles/Characters.css';

const initialState = {
  favorites: [],
};

const favoriteRedicer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

function Characters() {

  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteRedicer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  };

  return (
    <div className='Characterts'>

      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

      {characters.map((character) => (
        <div className='item' key={character.id}>
          <h2>
            <img src={character.image} alt='imagen' />
            Name:
            {' '}
            {character.name}
            <br />
            Status:
            {' '}
            {character.status}
            <br />
            Specie:
            {' '}
            {character.species}
            <button
              type='button'
              onClick={() => handleClick(character)}
            >
              Agregar a Favoritos
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Characters;
