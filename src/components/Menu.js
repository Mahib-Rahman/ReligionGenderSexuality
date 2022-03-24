import React from "react";
import "./Menu.css";
import {NavLink} from "react-router-dom";

function Menu(props) {
    let menu = false, movie = false, themeWordle = false;
    if(props.str === "menu"){
        menu = true;
    }
    else{
        menu = false;
    }
    if(props.str === "movie"){
        movie = true;
    }
    else{
        movie = false;
    }
    if(props.str === "themeWordle"){
        themeWordle = true;
    }
    else{
        themeWordle = false;
    }
    if(menu){
        return(
            <div className="menu">
                <NavLink style={{color:'rgb(47, 53, 138)', backgroundColor: 'rgb(191, 154, 194)'}} className="menuButton" to="/ReligionGenderSexuality/">Home</NavLink>
                <NavLink className="menuButton" to="/MoviePicks/">Movie Picks</NavLink>
                <NavLink className="menuButton" to="/ThemeWordle/">Thematic Wordle</NavLink>
            </div>
        );
    }
    if(movie){
        return(
            <div className="menu">
                <NavLink className="menuButton" to="/ReligionGenderSexuality/">Home</NavLink>
                <NavLink style={{color:'rgb(47, 53, 138)', backgroundColor: 'rgb(191, 154, 194)'}} className="menuButton" to="/MoviePicks/">Movie Picks</NavLink>
                <NavLink className="menuButton" to="/ThemeWordle/">Thematic Wordle</NavLink>
            </div>
        );
    }
    if(themeWordle){
        return(
            <div className="menu">
                <NavLink className="menuButton" to="/ReligionGenderSexuality/">Home</NavLink>
                <NavLink className="menuButton" to="/MoviePicks/">Movie Picks</NavLink>
                <NavLink style={{color:'rgb(47, 53, 138)', backgroundColor: 'rgb(191, 154, 194)'}} className="menuButton" to="/ThemeWordle/">Thematic Wordle</NavLink>
            </div>
        );
    }
    return(
        <div className="menu">
            <NavLink className="menuButton" to="/ReligionGenderSexuality/">Home</NavLink>
            <NavLink className="menuButton" to="/MoviePicks/">Movie Picks</NavLink>
            <NavLink className="menuButton" to="/ThemeWordle/">Thematic Wordle</NavLink>
        </div>
    );
}

export default Menu;