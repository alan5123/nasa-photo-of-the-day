import React, { useState } from 'react';
import styled from "styled-components"
import { Button, Fade } from 'reactstrap';



const NasaTitle = styled.h2 `
color:white;
`
const NasaImage = styled.img `
max-width:70%;
max-height:1000px;

`
const PicDate = styled.p `
font-weight:bold;
color:white;
`
const PicExplanation = styled.p `
margin:5%;
color:white;

`
const NasaCard = props => {
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        
        <div className= 'Photo-list'>
            <NasaTitle>{props.title}</NasaTitle>
<NasaImage src ={props.image} alt= "NASA pic of the day " />
    <PicDate>{props.date}</PicDate>
    <div>
            <Button color="info" onClick={toggle}>What Am i looking at?</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
            <PicExplanation>{props.explanation}</PicExplanation>
            </Fade>
        </div>
   
        </div>
    )
}






export default NasaCard