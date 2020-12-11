import React, { useEffect,useState } from 'react';
import './App.css';
import axios from "axios"
import Character from './components/Character';
import styled from "styled-components"


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
      setCharacterData(res.data.results)
    })
    .catch((err) => {
      console.log(err)
      debugger
    })
  },[])

  console.log(characterData)

  return (
    <div className="App">
      <StyledDiv>
      <h1 className="Header">Characters</h1>
      </StyledDiv>
      {characterData.map((charact,ixd) => {
        return (<Character 
          name = {charact.name}
          image = {charact.image}
          species = {charact.species}
          gender = {charact.gender}
          location = {charact.location.name}
          origin = {charact.origin.name}
          status = {charact.status}
          key = {ixd}
        />)
      })}
    </div>
  );
}

const StyledDiv = styled.div`
padding:2%;
text-align: start;
text-decoration:underline;
margin-left: 7%;
font-size: 2rem;
`

export default App;
