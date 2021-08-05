import React, { useState } from "react";

const Header = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    const [titleClass, setTitleClass] = useState("headerTitle Dark");
    const [buttonClass, setButtonClass] = useState("toggleMode");
    const handleClick = (props) => {
        setDarkMode(!darkMode);
        handleClass();
    }

    const handleClass = () => {

        if (darkMode) {
            setTitleClass("headerTitle Dark");
            props.changeMode('Dark');
        } else {
            setTitleClass("headerTitle Light");
            props.changeMode('Light');
        }

    }


    return (
        <div className="header">
            <h1 className={titleClass}> Rick and Morty </h1>
            <div style={{ textAlign: "center" }}>
                <button type="button" onClick={handleClick} className={buttonClass}>
                    {darkMode ? " Dark Mode" : "Light Mode"}
                </button>
            </div>

        </div>
    )
}

export default Header;