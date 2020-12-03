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
  const [favorites, dispatch] = useReducer(favoriteRedicer, initialState, init);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className='Characterts'>
      {characters.map((character) => (
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
        </h2>
      ))}
    </div>
  );
}

export default Characters;
