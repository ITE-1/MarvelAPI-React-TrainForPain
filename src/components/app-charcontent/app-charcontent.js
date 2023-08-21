import React, { useState, useEffect } from 'react';
import './app-charcontent.scss';
import MarvelService from '../services/services';
import Abyss from '../../assets/img/abyss.jpg';

const CharList = ({ getID }) => {
  const marvelService = new MarvelService();

  const [characters, setCharacters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('моунт');
      setLoading(true);
    
    marvelService
        .getAllCharacters()
        .then((characters) => {
          setLoading(false);
          setCharacters(characters);
        })
        .catch((error) => {
          setError(true)
          setLoading(false)
          console.error('Ошибка при загрузке данных:', error);
        });
   
  }, []);

 
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

  return (
    loading ? <span>Loading...</span> :
    error ? ( 
        <div className='char__list'>
            <ul className='char__grid'>
              {Array.from({length: 9}).map((_, index) => (
                  <li className='char__item' key={index}>
                  <img src={Abyss} alt='Abyss' />
                  <div className='char__name'>No Person</div>
              </li>
              ))}
                
            </ul>
        </div>
    ) : (
        <div className='char__list'>
            <ul className='char__grid'>
                {characters.map((character, index) => {
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
                })}
            </ul>
        </div>
    )
);
};

export default CharList;