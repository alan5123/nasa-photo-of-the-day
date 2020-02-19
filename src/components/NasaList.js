import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard"
export default function NasaList(){
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=py1Oq7kNzleIO9r6Jte5zIOwSz8jtyuFQZ2tC2hF').then(response =>{
            console.log(response.data);
setPhotos([response.data])
        })
        .catch(error => {
            console.log(error)
        })
        
    }, []);
    return (
        
        <div className= 'photo'>
           {photos.map(photo =>{
         return(
             
            <NasaCard
            title = {photo.title}
            image = {photo.hdurl}
            explanation = {photo.explanation}
            date = {photo.date}/>
         );
        })}
        
    </div>
    );
}

