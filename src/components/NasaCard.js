import React from "react"

const NasaCard = props => {
    return (
        <div className= 'Photo-list'>
            <h2>{props.title}</h2>
<img src ={props.image} alt= "space " />
    <p>{props.date}</p>
    <p>{props.explanation}</p>
        </div>
    )
}






export default NasaCard