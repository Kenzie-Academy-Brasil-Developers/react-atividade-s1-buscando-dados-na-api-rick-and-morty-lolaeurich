import {useEffect, useState} from "react";
import {Characters} from "./components/Characters";

function App() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {      
      fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => setCharacters(data.results))
    }, [])

  return (
    <div>
        <Characters characterList={characters}/>
    </div>
  );
}

export default App;