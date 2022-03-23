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
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MoviePicks" element={<Movie />} />
                <Route path="/ThemeWordle" element={<ThemeWordle />} />
            </Routes>
        </div>
    );
}

export default App;
