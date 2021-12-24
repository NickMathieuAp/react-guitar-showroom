import React from 'react'
import BassImage from "../components/Bass/BassImage";
import BassText from "../components/Bass/BassText";

const imgBass= "../bass.jpg";


const Bass = () => {
    return (
        <>
        <BassImage image={imgBass} />
        <BassText name="Fender classic Vibe 60's" age={1960} />
        </>
    );
};


export default Bass;