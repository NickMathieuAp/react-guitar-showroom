import React from "react";

type propsTextGuitar= {
    name:string,
    age:number
}
  
const AcousText = (props:propsTextGuitar) => {
    return(
        <div>
            <h2>Name:{props.name}</h2>
            <h2>Build-date:{props.age}</h2>
        </div>
    )

};
export default AcousText;