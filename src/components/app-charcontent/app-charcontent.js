import React, { useState, useEffect } from 'react';
import './app-charcontent.scss';
import MarvelService from '../services/services';

const CharList = ({ getID }) => {
  const marvelService = new MarvelService();

  const [characters, setCharacters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    console.log('моунт');
    updateCharacterList();

    
  }, []);

  const updateCharacterList = () => {
    marvelService
      .getAllCharacters()
      .then((characters) => {
        setCharacters(characters);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  };

  const _getThumbnailStyle = (thumbnail) => {
    let imgStyle = { objectFit: 'cover' };

    if (
      thumbnail ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    ) {
      imgStyle = { objectFit: 'fill' };
    }

    return imgStyle;
  };

  const handleClickItem = (index, id) => {
    getID(id);
    setActiveIndex(index);
    setSelectedCharacter(characters[index]);
    console.log('отрабатывает клик', index, id);
  };

  const charItems = characters.map((character, index) => {
    const imgStyle = _getThumbnailStyle(character.thumbnail);
    const itemClasses = `char__item ${index === activeIndex ? 'active' : ''}`;
    return (
      <li
        className={itemClasses}
        key={character.id}
        onClick={() => handleClickItem(index, character.id)}
      >
        <img src={character.thumbnail} alt={character.name} style={imgStyle} />
        <div className='char__name'>{character.name}</div>
      </li>
    );
  });

  return (
    <div className='char__list'>
      <ul className='char__grid'>{charItems}</ul>
    </div>
  );
};

export default CharList;