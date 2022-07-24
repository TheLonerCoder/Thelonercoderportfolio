import React from 'react';
import '../styles/navbar.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Journey from './pages/journey';
import Portfolio from './pages/portfolio';
import ErrorPage from './pages/error';



function Navbar () {
    return (
        // <ul className="navbar">
        //     <li><a href="">Home</a></li>
        //     <li><a href="">My Journey</a></li>
        //     <li><a href=''>Portfolio</a></li>
        // </ul>

        <Router>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/journey'>Journey</Link>
                <Link to='/portfolio'>Portfolio</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/journey' element={<Journey/ >}/>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>


            <footer>Boiletplate</footer>
        </Router>

    )
}



export default Navbar;