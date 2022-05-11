import React from "react";
import "./Menu.css";
import {NavLink} from "react-router-dom";

function Menu(props) {
    let menu = false, movie = false, video = false;
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
    if(props.str === "video"){
        video = true;
    }
    else{
        video = false;
    }
    if(menu){
        return(
            <div className="menu">
                <NavLink style={{color:'rgb(47, 53, 138)', backgroundColor: 'rgb(191, 154, 194)'}} className="menuButton" to="/ReligionGenderSexuality/">Home</NavLink>
                <NavLink className="menuButton" to="/MoviePicks/">Movie Picks</NavLink>
                <NavLink className="menuButton" to="/Video/">Video</NavLink>
            </div>
        );
    }
    if(movie){
        return(
            <div className="menu">
                <NavLink className="menuButton" to="/ReligionGenderSexuality/">Home</NavLink>
                <NavLink style={{color:'rgb(47, 53, 138)', backgroundColor: 'rgb(191, 154, 194)'}} className="menuButton" to="/MoviePicks/">Movie Picks</NavLink>
                <NavLink className="menuButton" to="/Video/">Video</NavLink>
            </div>
        );
    }
    if(video){
        return(
            <div className="menu">
                <NavLink className="menuButton" to="/ReligionGenderSexuality/">Home</NavLink>
                <NavLink className="menuButton" to="/MoviePicks/">Movie Picks</NavLink>
                <NavLink style={{color:'rgb(47, 53, 138)', backgroundColor: 'rgb(191, 154, 194)'}} className="menuButton" to="/Video/">Video</NavLink>
            </div>
        );
    }
    return(
        <div className="menu">
            <NavLink className="menuButton" to="/ReligionGenderSexuality/">Home</NavLink>
            <NavLink className="menuButton" to="/MoviePicks/">Movie Picks</NavLink>
            <NavLink className="menuButton" to="/Video/">Video</NavLink>
        </div>
    );
}

export default Menu;