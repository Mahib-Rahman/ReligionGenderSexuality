import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Movie from './components/Movie';
import ThemeWordle from './components/ThemeWordle';

import {Routes, Route} from "react-router-dom";

function App() {
    return(
        <div>
            <Header />
            <Routes>
                <Route path="/ReligionGenderSexuality/" element={
                    <>
                        <Menu 
                            str="menu"
                        />
                        <Home />
                    </>
                } />
                <Route path="/MoviePicks/" element={
                    <>
                        <Menu 
                            str="movie"
                        />
                        <Movie />
                    </>
                } />
                <Route path="/ThemeWordle/" element={
                    <>
                        <Menu 
                            str="themeWordle"
                        />
                        <ThemeWordle />
                    </>
                } />
            </Routes>
        </div>
    );
}

export default App;
