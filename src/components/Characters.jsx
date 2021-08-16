import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";
import Character from "./Character";
import useCharacters from "./hooks/useCharacters";

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
const API = "https://rickandmortyapi.com/api/character"
const Characters = (props) => {

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const [activeFav, setActiveFav] = useState(false);
    const searchInput = useRef(null);

    const characters = useCharacters(API);

    const handleClick = (favorite) => {
        dispatch({ type: "ADD_TO_FAVORITE", payload: favorite })
        setActiveFav(true);
    }

    const handleSearch = () => {
        setSearch(searchInput.current.value)
    }

    //const filteredCharacter = characters.filter((character) => {
    //   return character.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filteredCharacter = useMemo(() =>
        characters.filter((character) => {
            return character.name.toLowerCase().includes(search.toLowerCase())
        }), [characters, search]
    )

    return (
        <>
            <div className="inputWrapper">
                <input type="text" value={search} onChange={handleSearch} ref={searchInput} placeholder="Type here the name of your favorite character" />
            </div>
            <div className="Characters" >
                {activeFav && (<div className="favoritesTopWrapper">
                    <h2 className="headerTitle Dark"> Favorites ⭐</h2>
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

                </div>)}
                {filteredCharacter.map((character) => (
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

        </>

    )

}

export default Characters;