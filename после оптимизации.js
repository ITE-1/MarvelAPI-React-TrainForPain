import React from 'react';
import './app-randomchar.scss';
import mjolnir from './../../assets/img/mjolnir.png';
import { useContext } from "react";
import { DataContext } from '../app/App'

const RandomChar = () => {
  const {randomChar, loading} = useContext(DataContext);
  return (
      <div>
          {loading ? <div>Empty</div> : <View char={randomChar}/>}
      </div>
  );
}
  const View = ({ char }) => {
    return (
      <div className='randomchar'>
      
            <div className='randomchar__block'>
              <img alt='TOR' className='randomchar__img' src={char.thumbnail} />
              <div className='randomchar__info'>
                  <p className='randomchar__name'>{char.name}</p>
                  <p className='randomchar__dscr'>{char.description}</p>
                  <div className='randomchar__btns'>
                      <a className='button button__main' href={char.homepage}>
                          <div className='inner'>Homepage</div>
                      </a>
                      <a className='button button__secondary' href={char.wiki}>
                          <div className='inner'>WIKI</div>
                      </a>
                  </div>     
                </div>
              </div>
            <div className='randomchar__static'>
                  <p className='randomchar__title'>
                    Random character for today!
                    <br />
                    Do you want to get to know him better?
                  </p>
                  <p className='randomchar__title'>Or choose another one</p>
              <button className='button button__main'>
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
    )
}
   

export default RandomChar;