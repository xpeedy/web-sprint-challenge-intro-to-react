// Write your Character component here
import React from "react"


function Character(props) {
    const {id,name,image,species} = props
    
    return(
        <div>
            <h2>{id}</h2>
            <h1>{name}</h1>
            <img src = {image} alt ="image"/>
            <h2>{species}</h2>
        </div>
        
    )
}



export default Character;