import Spiner from '../spiner/Spiner'
import React, { useEffect, useState, useContext } from 'react'
import MarvelService from '../services/services'
import { MyContext } from '../app/App'
import CharInfoItem from './charinfo-item/charinfo-item'

const CharInfo = () => {
const {id, setID} = useContext(MyContext);
const [selectedHeroes, setSelectedHeroes] = useState({});
const [character, setCharacter] = useState({});
const [loading, setLoading] = useState(true);
const marvelServices = new MarvelService();
// JSON.stringify(localStorage.setItem('lastCharId', charID))
const loadCharacter = async () => {
    if(!id) return;

    try {
        const char = await marvelServices.getCharacter(id);
        setCharacter(char)
        setLoading(false); 
    } catch (error) {
        console.error('failed to load', error)
    }
}

useEffect(() => {
  setLoading(true)
    setID(id)
    loadCharacter()
    console.log(character, 'ищем ID')
}, [id]);

        return (
          <div>
            { loading ? <Spiner/> : <CharInfoItem {...character}/> }
          </div>
          
            
  );
}


export default CharInfo