import React from 'react';
import '../styles/navbar.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Journey from './journey';
import Portfolio from './portfolio';
import ErrorPage from './error';






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
                {/* {profileArray.map(item => {
                    return (<Link to='/portfolio/:{item}'>{item}</Link>)
                })} */}
            </nav>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/journey' element={<Journey/ >}/>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='/portfolio' element={<Portfolio />}/>
                <Route path='*' element={<ErrorPage />}/>
                {/* {profileArray.map(item => {
                    return (<Route path='/por' element={<Portfolio/>}>{item}</Route>)
                })} */}
            </Routes>


            <footer>
            Boilerplate
            
            </footer>
            {/* <div>{testProfile.one}</div>

            
            <div>{Object.keys(testProfile).length}</div> */}
        </Router>

    )
}



export default Navbar;