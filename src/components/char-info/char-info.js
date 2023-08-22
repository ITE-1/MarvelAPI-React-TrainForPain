
import React, { useEffect, useState } from 'react'
import thor from './../../assets/img/thor.jpeg'
import MarvelService from '../services/services'

const CharInfo = ({charID}) => {

const [character, setCharacter] = useState({});
const [loading, setLoading] = useState(true);
const marvelServices = new MarvelService();
// JSON.stringify(localStorage.setItem('lastCharId', charID))
const loadCharacter = async () => {
    if(!charID) return;

    try {
        const char = await marvelServices.getCharacter(charID);
        setCharacter(char)
        JSON.stringify(localStorage.setItem('CharSelected', char))   
        setLoading(false); 
    } catch (error) {
        console.error('failed to load', error)
    }
}

useEffect(() => {
    loadCharacter()
    console.log(character)
}, [charID]);

        return (
            <div className="char__info">
                <div className="char__basics">
                    <img src={character.thumbnail} alt={thor}/>
                <div>
          <div className="char__info-name">{character.name}</div>
          <div className="char__btns">
            {character.urls && (
              <>
                <a href={character.urls[0].url} className="button button__main">
                  <div className="inner">homepage</div>
                </a>
                <a href={character.urls[1].url} className="button button__secondary">
                  <div className="inner">Wiki</div>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='char__descr'>{character.description}</div>
      <div className='char__comics'>Comics:</div>
      <ul className='char__comics-list'>
        {character.comics && character.comics.items.map((comic, index) => (
          <li key={index} className='char__comics-item'>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
}


export default CharInfo