// Write your Character component here
import React from "react"


function Character(props) {
    const {name} = props



    return(
        <div>
            <h1>{name}</h1>
        </div>
        
    )
}



export default Character;