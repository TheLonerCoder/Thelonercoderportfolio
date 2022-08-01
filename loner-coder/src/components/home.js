import React, {useState} from 'react';
import '../styles/home.css';
import '../styles/website.css'
import {FaGithub, FaYoutube, FaTwitter, FaLinkedinIn, FaDownload, FaMailBulk, FaProjectDiagram} from 'react-icons/fa';
import Journey from './journey';
import HomeProjects from './homeProjects';
import {Blink} from 'react-blink-text';
import Projects from './projects';
import styled, { keyframes } from 'styled-components';
import {flash} from 'react-animations';

// TODO Add hover "The Loner Coder" when you hover over "Stephon Stokley". it should fade out and in when you hover over and then back tom normal when not hover over

// TODO Add a blinking affect to the | after Developer

// TODO Add spacing and test responsiveness, media queries
// rcfe



const flashAnimation = keyframes `${flash}`;
const FlashSpan = styled.span `
    animation: 2s ${flashAnimation}
`



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
            {/* <img src="imgs/man.png" alt="potrait" id='portrait'/> */}
            <img src="/imgs/man.png" alt="potrait" id='portrait'/>
            <h1>Hello! I'm <span id="name" onMouseEnter={nameChange} onMouseLeave={nameChangeBack}>{currentName}</span></h1> 
            <h4>I'm a Web Developer<FlashSpan> | </FlashSpan></h4>
        </header>

        <article id='aboutMe'>
            <p>I'm a React-focused Web Developer (MERN-Stack) with some experience in Python. My projects are passion-focued, pertaining to immersive technologies, exoplanets/space, entrepreneurship, learning languages, and music.</p>
            
            <ul id='socialLinks'>
                <li><a href="https://github.com/TheLonerCoder" target="_blank"><FaGithub /></a></li>
                <li><a href="" target="_blank"><FaYoutube /></a></li>
                <li><a href="https://twitter.com/thelonercoder/with_replies" target="_blank"><FaTwitter /></a></li>
                <li><a href="" target="_blank"><FaLinkedinIn /></a></li>
            </ul>

            {/* <button id='emailBtn'><FaMailBulk />Email Me</button>
            <button id='resumeBtn' download={'imgs/im-here.png'}><FaDownload />Resume</button>
            <button id='projectBtn'><FaProjectDiagram />Projects</button> */}

            <a id='emailBtns'><FaMailBulk />Email Me</a>
            <a href="imgs/im-here.png" download id='resume'><FaDownload />Resume</a>
            <a id='projectBtns'><FaProjectDiagram />Projects</a>
        </article>


        {/* <HomeProjects /> */}
        <Projects />
        <Journey />
    </div>
  )
}

export default Home;