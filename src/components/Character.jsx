import React, { useState, useEffect } from "react";

const Character = (props) => {
    const [titleStyle, setTitleStyle] = useState("name");
    const [subDescriptionStyle, setSubDescriptionStyle] = useState("subDescription");

    const handleMood = () => {
        if (props.mood === "Light") {
            setTitleStyle("name light")
            setSubDescriptionStyle("subDescription light")
        } else {
            setTitleStyle("name")
            setSubDescriptionStyle("subDescription")
        }
    }

    useEffect(() => {
        handleMood()
    }, [props.mood])
    return (
        <div className={"container"}>
            <h2 className={titleStyle}>{props.name}</h2>
            <h3 className={subDescriptionStyle}> {props.status}</h3>
            <h3 className={subDescriptionStyle}> {props.gender}</h3>
            <img src={props.image} alt={props.name} className={"image"} />
        </div>
    )

};

export default Character;