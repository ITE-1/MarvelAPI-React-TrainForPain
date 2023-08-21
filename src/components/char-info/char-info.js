
import React, { useEffect, useState } from 'react'
import thor from './../../assets/img/thor.jpeg'
import MarvelService from '../services/services'

const CharInfo = ({charID}) => {
const [character, setCharacter] = useState(null);
const [loading, setLoading] = useState(true);
const marvelServices = new MarvelService();

// useEffect(() => {
//     if(!charID) {
//         return;
//     }
//     if(loading) {
//         return;
//     }

//     marvelServices
//         .getCharacter(charID)
//         .then((char) => {
//             setCharacter(char);
//             setLoading(false);
//         })
// }, [charID, marvelServices]);

//  const { name, description, thumbnail, homepage, wiki, comics } = character;

        return (
            <div className="char__info">
            <div className="char__basics">
                <img src={thor} alt="abyss"/>
                <div>
                    <div className="char__info-name">thor</div>
                    <div className="char__btns">
                        <a href="#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="#" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
        <div className='char__descr'>
        n Norse mythology, Loki is a god or jötunn (or both). 
        Loki is the son of Fárbauti and Laufey, and the brother 
        of Helblindi and Býleistr. By the jötunn Angrboða, 
        Loki is the father of Hel, the wolf Fenrir, and the world serpent 
        Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi 
        and with the stallion Svaðilfari as the father, 
        Loki gave birth—in the form of a mare—to the eight-legged 
        horse Sleipnir. In addition, 
        Loki is referred to as the father of Váli in the Prose Edda.
        </div>
        <div className='char__comics'>Comics:</div>
        <ul className='char__comics-list'>
            <li className='char__comics-item'>
             All-Winners Squad: Band of Heroes (2011) #3
            </li>
            <li className='char__comics-item'>
             All-Winners Squad: Band of Heroes (2011) #3
            </li>
            <li className='char__comics-item'>
             All-Winners Squad: Band of Heroes (2011) #3
            </li>
        </ul>
    </div>
        )
        
      }
    





export default CharInfo