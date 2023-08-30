import React, { useState, useEffect, useContext } from 'react';
import './app-charcontent.scss';
import MarvelService from '../services/services';
import Abyss from '../../assets/img/abyss.jpg';
import { MyContext } from '../app/App';
const marvelService = new MarvelService();

const CharList = ({ getID }) => {
  const {id, setID} = useContext(MyContext);
  const [offset, setOffset] = useState(100)
  const [characters, setCharacters] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const archivedCharacters = JSON.parse(localStorage.getItem('last9char'));
    console.log('получили персонажей из ЛС')
    // if (archivedCharacters && archivedCharacters.length > 0) {
      if(characters && characters.length > 0) {
      // setCharacters(archivedCharacters)
      setLoading(false)
    } else {
      console.log('сделали запрос')
      marvelService
      .getAllCharacters(145)
      .then((characters) => {
        localStorage.setItem('last9char', JSON.stringify(characters));
        setLoading(false);
        setCharacters(characters);
      })
      .catch((error) => {
        setError(true)
        setLoading(false)
        console.error('Ошибка при загрузке данных:', error);
      });
    }

  }, [])

  
    // const reloadCharactersWithMissingImages = async () => {
    //   // Идентифицировать элементы с отсутствующими изображениями
    //   const missingImageIds = characters.filter(char => char.thumbnail.path.includes('image_not_available')).map(char => char.id);
    //   console.log(missingImageIds)
    //   // Загрузить новые элементы для замены
    //   const newCharacters = await Promise.all(
    //     missingImageIds.map(async id => {
    //       const random = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;; // Генерация нового ID
    //       return await marvelService.getCharacter(random);
    //     })
    //   );
    //   const updatedCharacterList = characters.map(char => {
    //     if (char.thumbnail.path.includes('image_not_available')) {
    //       // Заменить элемент новым
    //       return newCharacters.shift();
    //     }
    //     return char;
    //   }); 
    //   setCharacters(updatedCharacterList);
    // }
 

  const uploadCharacters = (e) => {
    e.preventDefault();
    setLoading(true)
    marvelService
      .getAllCharacters(offset)
      .then(newCharacters => {
        setCharacters([...characters, ...newCharacters]);
        setOffset(offset + 9);
        setLoading(false)
      })
      .catch(error => {
        setError(true);
        setLoading(false)
        console.error('ERROR', error);
      })
  }
  
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
  const handleSelectItem = (e) => {
    const currentTarget = e.target;
    console.log(currentTarget)
  }
  const handleClickItem = (index, id) => {
    
    setID(id);
    setActiveIndex(index);
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
                            <div className='char__favorite'><button type='submit' onClick={(e) => handleSelectItem(e) }>0</button></div>
                        </li>
                    );
                })}
                 <button className="myButton" onClick={(e) => uploadCharacters(e)}>Загрузить персонажей</button>
            </ul>

        </div>
    )
);
};

export default CharList;