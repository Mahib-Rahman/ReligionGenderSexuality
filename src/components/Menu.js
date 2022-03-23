import React from "react";
import "./Menu.css";
import {NavLink} from "react-router-dom";

function Menu() {
    return(
        <div className="menu">
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="/MoviePicks">Movie Picks</NavLink></div>
            <div><NavLink to="/ThemeWordle">Thematic Wordle</NavLink></div>
        </div>
    );
}

export default Menu;