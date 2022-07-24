import React from 'react';
import '../styles/home.css';
import '../styles/website.css'
import {FaGithub, FaYoutube, FaTwitter, FaLinkedinIn} from 'react-icons/fa';



// rcfe
function Home() {
  return (
    <div>
        <header>
            <h2>Hello! i'm <span id="name">Stephon Stokley</span></h2> 
            <h4>I'm a Web Developer|</h4>
        </header>

        <article>
            <p>I'm a React-focused Web Developer (MERN-Stack) with some experience in Python. My projects are passion-focued, pertaining to exoplanets/space, entrepreneurship, learning languages, and music.</p>
            
            <ul>
                <li><a href=""><FaGithub /></a></li>
                <li><a href=""><FaYoutube /></a></li>
                <li><a href=""><FaTwitter /></a></li>
                <li><a href=""><FaLinkedinIn /></a></li>
            </ul>

            <button id='emailBtn'>Email Me</button>
            <button id='resumeBtn'>Resume</button>
            <button id='projectBtn'>Projects</button>
        </article>
    </div>
  )
}

export default Home;