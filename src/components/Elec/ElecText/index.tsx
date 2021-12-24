import React from "react";

type propsTextElecGuitar= {
    name:string,
    age:number
}
  
const ElecText = (props:propsTextElecGuitar) => {
    return(
        <div>
        <h2>Name:{props.name}</h2>
        <h2>Build-date:{props.age}</h2>
    </div>
    )

};
export default ElecText;