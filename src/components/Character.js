// Write your Character component here
import React from "react"
import styled from "styled-components"

function Character(props) {
    const {id,name,image,species,gender,location,origin,status} = props
    
    return(
        <InfoContainer className="info-container">
            <h2>{id}</h2>
            <h1 className="name">{name}</h1>
            <img src = {image} alt ={name} />
            <div className="character-info">
            <h2>SPECIES: {species}</h2>
            <h2>GENDER: {gender}</h2>
            <h2>LOCATION: {location}</h2>
            <h2>FROM: {origin}</h2>
            <h2>STATUS: {status}</h2>
            </div>
        </InfoContainer>
        
        )
}

const InfoContainer = styled.div`
.name {
    text-align: center;
border: solid lightgreen 7px;
border-radius:50%;
padding:1%;
margin-left: 27%;
margin-bottom:-5%;
width: 15%; 
}

.character-info {
    width: 30%;
margin-left: 28%;
margin-top:-10%;
margin-bottom: 4%;
text-align:start;
}

img {
    border-radius:10%;
margin-left: 10%;
display:flex;
justify-content:space-evenly;  
}

`






export default Character;