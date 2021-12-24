import React from "react";
import ElecImage from "../components/Elec/ElecImage";
import ElecText from "../components/Elec/ElecText";

const imgEko= "../eko.jpg";
const imgStrat= "../strat.jpg";
const imgMoon= "../moon.jpg";



const Elec = () => {
    return (
        <>
        <ElecImage image={imgEko} />
        <ElecText name="Eko Kadett" age={1967} />

        <ElecImage image={imgMoon}/>
        <ElecText name="Ibanez Bizz Moon" age={1966} />

        <ElecImage image={imgStrat}/>
        <ElecText name="Strat Reissue" age={1963} />
        </>
    );
};

export default Elec;