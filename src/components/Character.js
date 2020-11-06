// Write your Character component here
import React from "react"
import styled from "styled-components"

function Character(props) {
    const {id,name,image,species,gender,location,origin} = props
    
    return(
        <div>
            <h2>{id}</h2>
            <H1Style>{name}</H1Style>
            <StyleImg src = {image} alt ="image"/>
            <InfoDiv>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Location: {location}</h2>
            <h2>From: {origin}</h2>
            </InfoDiv>
        </div>
        
        )
}
const H1Style = styled.h1`
text-align: center;
border:solid black ;
/* margin-left: 13%; */
margin-left: 27%;
margin-bottom:-5%;
width: 20%;
`
const StyleImg = styled.img`
border : solid white;
border-radius:10%;
margin-left: 10%;
display:flex;
justify-content:space-evenly;
`

const InfoDiv = styled.div`
width: 30%;
margin-left: 28%;
margin-top:-10%;
margin-bottom: 4%;
text-align:start;
`



export default Character;