import React from "react";
import styles from './elec.module.css'; 



type propsImageElecGuitar= {
    image:string,
}


const ElecImage = (props:propsImageElecGuitar) => {
    return(<>
        <div>ElecImage Component</div>
        <div >
            <img src={props.image}></img> 
        </div>
    </>

    )

};
export default ElecImage;