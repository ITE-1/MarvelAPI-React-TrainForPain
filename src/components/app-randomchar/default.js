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



  return (

    <div className='randomchar'>
     
                <div className='randomchar__block'>
                    <img alt='FAIL' className='randomchar__img' src={Tor}/>
                    <div className='randomchar__info'>
                    <p className='randomchar__name'>sss</p>
                    <p className='randomchar__dscr'>ssss</p>
                            <div className='randomchar__btns'>
                                <a className='button button__main' href='#'>
                                <div className='inner'>Homepage</div>
                                </a>
                                <a className='button button__secondary' href='#'>
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
                    <button className='button button__main'>TRY IT</button>
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

export default RandomChar;