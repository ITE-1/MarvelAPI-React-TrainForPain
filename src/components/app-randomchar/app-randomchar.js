import React, { useState, useEffect } from 'react';
import './app-randomchar.scss';
import mjolnir from './../../assets/img/mjolnir.png';
import MarvelService from '../services/services';
import Person from './person';
import Spiner from '../spiner/Spiner';
import Error from '../error/Error';

const RandomChar = () => {
  const marvelService = new MarvelService();

  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('mount');
    updateChar();
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const updateChar = () => {
    console.log('updateChar');
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    marvelService
      .getCharacter(id)
      .then(onCharLoaded)
      .catch(onError);
  };

  console.log('render');
  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? <Spiner /> : null;
  const content =
    !(loading || error) && char ? <View char={char} /> : null;

  return (
    <div className='randomchar'>
      {errorMessage}
      {spinner}
      {content}
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
  console.log('VIEW');
  const { name, description, thumbnail, homepage, wiki } = char;
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
};

export default RandomChar;