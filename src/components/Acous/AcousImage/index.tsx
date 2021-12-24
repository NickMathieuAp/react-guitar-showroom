import React from "react";
import styles from './acous.module.css'; 


type propsImageAcousGuitar= {
    image:string,
}

const AcousImage = (props:propsImageAcousGuitar) => {
    return(<>
        <div>
            AcousImage Component
        </div>
        <div >
            <img src={props.image}></img> 
        </div>
    </>

    )

};
export default AcousImage;