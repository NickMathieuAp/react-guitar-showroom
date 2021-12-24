import React from "react";
import styles from './bass.module.css'; 


type propsImageBassGuitar= {
    image:string,
}

const BassImage = (props:propsImageBassGuitar) => {
    return(<>
        <div>BassImage Component</div>
        <div >
            <img src={props.image}></img> 
        </div>    
    </>
    )

};
export default BassImage;