import React, { useState, useEffect } from 'react';
import './app-randomchar.scss';
import mjolnir from './../../assets/img/mjolnir.png';
import Tor from '../../assets/img/thor.jpeg';
import MarvelService from '../services/services';
import Spiner from '../spiner/Spiner';
import Error from '../error/Error';

const marvelService = new MarvelService();

const RandomChar = ({getID}) => {


  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('первый mount мутим с savedchar');
    const savedChar = JSON.parse(localStorage.getItem('lastChar'));
    
    if(savedChar && Object.keys(savedChar).length > 0) {
      setLoading(false)
      setChar(savedChar)
      getID(savedChar.id)
    } else {
      updateChar();
    }
    
  }, []);

 useEffect(() => {
  console.log('Второе монтирование в случае ошибки')
  if(error) {
    const timer = setTimeout(() => {
      setError(false);
      setLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }
 }, [error]);

  const onCharLoaded = (char) => {
    localStorage.setItem('lastChar', JSON.stringify(char))
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const updateChar = () => {
    
    console.log('updateChar');
    setLoading(true)
  const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
  getID(id);
  marvelService
    .getCharacter(id)
    .then(onCharLoaded)
    .catch(onError);
    console.log('сработал запрос')
  };
 
  const renderContent = () => {
    if (error) return <Error />;
    if (loading) return <Spiner />;
    return <View char={char} />;
  }

  // const errorMessage = error ? <Error /> : null ;
  // const spinner = loading ? <Spiner /> : null;
  // const content = !(loading && !error) ? <View char={char} /> : null;
  

  return (

      <div className='randomchar'>
        
        {renderContent()}
        <div className='randomchar__static'>
          <p className='randomchar__title'>
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className='randomchar__title'>Or choose another one</p>
          <button onClick={updateChar} className='button button__main'>
            TRY IT
          </button>
          <img
            src={mjolnir}
            className='randomchar__decoration'
            alt='mjolnir'
            style={{ opacity: '0.6' }}
          />
        </div>
      </div>
    );
  
};

const View = ({ char }) => {
  const defaultChar = {
    name: 'Thor',
    description: 'In Norse mythology, Loki is a god or jötunn ...',
    thumbnail: Tor,
    homepage: '#',
    wiki: '#'
  };
  const character = (char && Object.values(char).length !== 0) ? char : defaultChar;
    const { name, description, thumbnail, homepage, wiki } = character;
    const isDescriptionAvailable = description && description.length > 0;
    const truncatedDescription = isDescriptionAvailable
      ? description.slice(0, 160) + '....'
      : '';
  
    return (
      <div className='randomchar__block'>
        {console.log('update VIEW BLOCK')}
        <img alt='TOR' className='randomchar__img' src={thumbnail} />
        <div className='randomchar__info'>
          <p className='randomchar__name'>{name}</p>
          <p className='randomchar__dscr'>
            {isDescriptionAvailable ? truncatedDescription : <p>Данных нет</p>}
          </p>
          <div className='randomchar__btns'>
            <a className='button button__main' href={homepage}>
              <div className='inner'>Homepage</div>
            </a>
            <a className='button button__secondary' href={wiki}>
              <div className='inner'>WIKI</div>
            </a>
          </div>
        </div>
      </div>
    );
  }  


 

export default RandomChar;