import React, { useState, useEffect } from "react";
import Character from "./Character";
const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    return (
        <div className="Characters" >
            {characters.map((character) => (
                <Character
                    name={character.name}
                    status={character.status}
                    gender={character.gender}
                    image={character.image}
                    key={character.id}
                />

            ))}

        </div>

    )

}

export default Characters;