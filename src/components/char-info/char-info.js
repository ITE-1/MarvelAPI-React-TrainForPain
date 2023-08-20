
import React from 'react'
import thor from './../../assets/img/thor.jpeg'

const CharInfo = ({selectedChar}) => {
    
    const getCharacterId = (e) => {
        e.preventDefault();
        
    }
        return (
            <div className='char__info'>
            <div className='char__basics'>
            <img src={thor} alt='img' />
            <div>
                {selectedChar.map(item => {
                    return
                })}
                <div className='char__info-name'></div>
                <div className='char__btns'>
                <a className='button button__main' href='google.com'>
                    <div className='inner' onClick={getCharacterId}>HOMEPAGE</div> 
                </a>
               <a className='button button__secondary' href='marvel.com'>
                <div className='inner'>WIKI</div> 
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