import React, { useState, useEffect, useContext } from 'react';
import './app-randomchar.scss';
import mjolnir from './../../assets/img/mjolnir.png';
import MarvelService from '../services/services';
import RandomcharBlock from './randomchar-block/randomchar-block';
import RandomCharStatic from './randomchar-static/randomchar-static';
import { MyContext } from '../app/App';
import Spiner from '../spiner/Spiner';
import { FALSE } from 'sass';

const FetchData = new MarvelService();

const RandomChar = () => {

const [randomCharacter, setRandomCharacter] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const {id, setID} = useContext(MyContext);

useEffect(() => {
    const lastChar = JSON.parse(localStorage.getItem('lastChar'));
    // console.log(lastChar)
    if(!randomCharacter) {
        setRandomCharacter(lastChar)
    }
  
    console.log('отработал юЗ Ефект')
    getCharacterItem(id)
}, [id])

console.log('вызвали функцию получения персонажа')

const getCharacterItem = async (id) => {
  
    try { 
        setLoading(true);
        const char = await FetchData.getCharacter(id);
        setID(id)
        console.log(char)
        localStorage.setItem('lastChar', JSON.stringify(char))
        setRandomCharacter(char)
    } catch (error) {
        setError(true)
        console.log(error, 'po pizde') 
    } finally {
        setLoading(false)
    }
  
}


  return (
 
    <div className='randomchar'>
           {console.log(loading)}
             {loading ?  <Spiner /> :  <RandomcharBlock {...randomCharacter}/> }
             {/* {loading ? <RandomcharBlock {...randomCharacter}/> : <Spiner />  } */}
                {/* // <RandomcharBlock {...randomCharacter}/> */}
                <RandomCharStatic getID={getCharacterItem}/>
    </div>
    );
  
};

export default RandomChar;