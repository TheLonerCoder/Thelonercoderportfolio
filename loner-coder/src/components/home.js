import React, {useState} from 'react';
import '../styles/home.css';
import '../styles/website.css'
import {FaGithub, FaYoutube, FaTwitter, FaLinkedinIn, FaDownload, FaMailBulk, FaProjectDiagram} from 'react-icons/fa';
import Journey from './journey';
import HomeProjects from './homeProjects';


// TODO Add hover "The Loner Coder" when you hover over "Stephon Stokley". it should fade out and in when you hover over and then back tom normal when not hover over

// TODO Add a blinking affect to the | after Developer

// TODO Add spacing and test responsiveness, media queries
// rcfe
function Home() {

    const [currentName, changeName] = useState('Stephon Stokley')


  let nameChange = () => {
    changeName('The Loner Coder');
  }

  let nameChangeBack = () => {
    changeName('Stephon Stokley');
  }



  return (
    <div>
        <header>
            <img src="imgs/man.png" alt="potrait" id='portrait'/>
            <h1>Hello! I'm <span id="name" onMouseEnter={nameChange} onMouseLeave={nameChangeBack}>{currentName}</span></h1> 
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