import React, { useEffect,useState } from 'react';
import './App.css';
import axios from "axios"
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((res) => {
      // console.log(res.data.results)
      setCharacterData(res.data.results.map(charact => {
        // console.log(charact)
        return charact
      }))
      return characterData
    })
    .catch((err) => {
      debugger
    })
  },[])
  
  console.log(characterData)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    <Character 
    id = {characterData.id}
    name = {characterData.name}
    image = {characterData.image}
    />
      <h2>hello</h2>
    </div>
  );
}

export default App;
