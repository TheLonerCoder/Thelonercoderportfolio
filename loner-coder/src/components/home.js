import React from 'react';
import '../styles/home.css';
import '../styles/website.css'
import {FaGithub, FaYoutube, FaTwitter, FaLinkedinIn, FaDownload, FaMailBulk, FaProjectDiagram} from 'react-icons/fa';
import Journey from './journey';
import HomeProjects from './homeProjects';



// rcfe
function Home() {
  return (
    <div>
        <header>
            <h1>Hello! I'm <span id="name">Stephon Stokley</span></h1> 
            <h4>I'm a Web Developer|</h4>
        </header>

        <article id='aboutMe'>
            <p>I'm a React-focused Web Developer (MERN-Stack) with some experience in Python. My projects are passion-focued, pertaining to exoplanets/space, entrepreneurship, learning languages, and music.</p>
            
            <ul>
                <li><a href=""><FaGithub /></a></li>
                <li><a href=""><FaYoutube /></a></li>
                <li><a href=""><FaTwitter /></a></li>
                <li><a href=""><FaLinkedinIn /></a></li>
            </ul>

            <button id='emailBtn'><FaMailBulk />Email Me</button>
            <button id='resumeBtn'><FaDownload />Resume</button>
            <button id='projectBtn'><FaProjectDiagram />Projects</button>
        </article>


        <HomeProjects />
        <Journey />
    </div>
  )
}

export default Home;