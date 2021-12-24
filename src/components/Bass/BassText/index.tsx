import React from "react";


type propsTextBassGuitar= {
    name:string,
    age:number
}

const BassText = (props:propsTextBassGuitar) => {
    return (
        <div>
            <div>BassText Component</div>
            <div>
                <h2>Name:{props.name}</h2>
                <h2>Build-date:{props.age}</h2>
            </div>
        </div>
    )

};
export default BassText;