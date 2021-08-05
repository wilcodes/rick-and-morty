import React from "react";

const Character =(props)=>(
<div className={"container"}>
    <h2 className={"name"}>{props.name}</h2>
    <h3 className={"subDescription"}> {props.status}</h3>
    <h3> {props.gender}</h3>
    <img src={props.image} alt={props.name} className={"image"}/>
</div>
);

export default Character;