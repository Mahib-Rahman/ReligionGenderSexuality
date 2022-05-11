import React from "react";
import films from "./films.json";
import "./Movie.css";


function Movie() {
    let choice = Math.floor(Math.random() * 201);
    return(
        <>
            <div className="movie-div">
                <a href={`https://www.google.com/search?q=${films["films"][choice]["title"]}`}>
                    <img alt="Movie Cover" src={films["films"][choice]["imglink"]}/>
                    <p>{String(films["films"][choice]["title"])}</p>
                </a>
                <p>{(films["films"][choice]["synopsis"]).slice(0,-6)}</p>
                <p>Not Happy with this film?</p>
                <p>Just refresh the page.</p>
            </div>
        </>
    );
}

export default Movie;