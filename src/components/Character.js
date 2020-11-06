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
            <h2>SPECIES: {species}</h2>
            <h2>GENDER: {gender}</h2>
            <h2>LOCATION: {location}</h2>
            <h2>FROM: {origin}</h2>
            </InfoDiv>
        </div>
        
        )
}
const H1Style = styled.h1`
text-align: center;
border: solid lightgreen 7px;
border-radius:50%;
padding:1%;
margin-left: 27%;
margin-bottom:-5%;
width: 15%;
`
const StyleImg = styled.img`
/* border : solid lightgreen 7px; */
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