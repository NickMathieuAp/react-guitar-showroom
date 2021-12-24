import React from "react";
import AcousImage from "../components/Acous/AcousImage";
import AcousText from "../components/Acous/AcousText";

const imgFamos= "../famos.jpg";
const imgMorris= "../morris.jpg";


const Acous = () => {
    return (
        <>
        <AcousImage image={imgFamos}/>
        <AcousText name="Famos Parlor" age={1960} />

        <AcousImage image={imgMorris}/>
        <AcousText name="Morris 12 string" age={1972} />
        </>
    );
};

export default Acous;
