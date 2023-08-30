import React, {useState,  createContext } from 'react';
import CharContent from '../app-charcontent/app-charcontent';
import AppHeader from '../header/app-header/app-header';
import '../header/header.scss'
import RandomChar from '../app-randomchar/app-randomchar2';
import '../../styles/style.scss';
import vision from './../../assets/img/vision.png';
import CharInfo from '../char-info/char-info';

export const MyContext = createContext({
  setID: () => 1011317,
  data: {},
  setData: () => {},
});

function App() {

const [id, setID] = useState(1011317)

  return (
    <MyContext.Provider value={{ id, setID, }}>
      
      <div className="App">
       <header className='header'>
        <AppHeader />
        <RandomChar/>
       </header>
      <main>
        <div className='char__content'>
          <CharContent />
          <CharInfo>
           
          </CharInfo>
         
        </div>
       
      </main> 
      {/* <img className='bg-decoration' alt='vision' src={vision} /> */}
    </div>
    </MyContext.Provider>
  );
}

export default App;
