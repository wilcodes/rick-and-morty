import React, { useState, useEffect, useReducer, useMemo } from "react";
import Character from "./Character";

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return {
                state
            }
    }
}
const Characters = (props) => {

    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])


    const handleClick = (favorite) => {
        dispatch({ type: "ADD_TO_FAVORITE", payload: favorite })
    }

    const ha
    return (

        <div className="Characters" >
            <div className="favoritesWrapper">
                {favorites.favorites.map(favorite => (
                    <Character
                        key={favorite.id}
                        name={favorite.name}
                        image={favorite.image}
                        activeFav={false}
                        mood={props.mood}
                    />

                ))}
            </div>

            {characters.map((character) => (
                <Character
                    character={character}
                    name={character.name}
                    status={character.status}
                    gender={character.gender}
                    image={character.image}
                    key={character.id}
                    mood={props.mood}
                    handleClick={(character) => handleClick(character)}
                    activeFav={true}
                />

            ))}

        </div>

    )

}

export default Characters;