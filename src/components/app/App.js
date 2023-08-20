import React, {useState} from 'react';
import CharContent from '../app-charcontent/app-charcontent';
import AppHeader from '../app-header/app-header';
import RandomChar from '../app-randomchar/app-randomchar';
import '../../styles/style.scss';
import vision from './../../assets/img/vision.png';
import CharInfo from '../char-info/char-info';

function App() {

const [selectedCharacter, setSelectedCharacter] = useState(null)

const getSelectedCharacterId = (id) => {
  setSelectedCharacter(id)
  console.log(selectedCharacter)
}

  return (
    <div className="App">
     
       <AppHeader />
      <main>
        <RandomChar />
        <div className='char__content'>
          <CharContent getID={getSelectedCharacterId} />
          <CharInfo charID={selectedCharacter}/>
        </div>
       
       
      </main> 
      <img className='bg-decoration' alt='vision' src={vision} />
    </div>
  );
}

export default App;
