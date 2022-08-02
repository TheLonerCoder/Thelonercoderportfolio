import React, {useState} from 'react';
import '../styles/home.css';
import '../styles/website.css'
import {FaGithub, FaYoutube, FaTwitter, FaLinkedinIn, FaDownload, FaMailBulk, FaProjectDiagram} from 'react-icons/fa';
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from "react-icons/bs";
import Journey from './journey';
// import HomeProjects from './homeProjects';
// import {Blink} from 'react-blink-text';
import Projects from './projects';
import styled, { keyframes } from 'styled-components';
import {flash} from 'react-animations';
// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'



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

        <nav id='navBar'>
          <ul>
            <li><Link to='projectsUrl' smooth={true} offset={50} duration={500}>Projects</Link></li>
            <li><Link to='ExperienceContainer' smooth={true} offset={50} duration={500}>My Journey</Link></li>
            {/* <Link to={} smooth={true} offset={200} duration={500}> */}
          </ul>
        </nav>

        {/* <ul id='navIcons'>
          <li><Link to='navBar' smooth={true} offset={50} duration={500}><BsFillArrowUpSquareFill size={25}/> </Link></li>
          <li><Link to='ExperienceContainer' smooth={true} offset={450} duration={500}><BsFillArrowDownSquareFill size={25}/></Link></li>
        </ul> */}

        <header>
            {/* <img src="imgs/man.png" alt="potrait" id='portrait'/> */}
            <img src="Thelonercoderportfolio/imgs/man.png" alt="potrait" id='portrait'/> 
            <h1>Hello! I'm <span id="name" onMouseEnter={nameChange} onMouseLeave={nameChangeBack}>{currentName}</span></h1> 
            <h4>I'm a Web Developer<FlashSpan> | </FlashSpan></h4>
        </header>

        <article id='aboutMe'>
            <p>I'm a React-focused Web Developer (MERN-Stack) with some experience in Python. I got my first taste of code with a 3 month Android App development Bootcamp back in 2019 but recently received my <a href="Thelonercoderportfolio/imgs/NucampCert.pdf" target="_blank"> certification from Nucamp </a> (for Full Stack Web Development).</p>

            <p>
              My projects are passion-focused, pertaining to immersive technologies, exoplanets/space, entrepreneurship, learning languages, and music.
            </p>
            
            <ul id='socialLinks'>
                <li><a href="https://github.com/TheLonerCoder" target="_blank"><FaGithub size={22}/></a></li>
                <li><a href="" target="_blank"><FaYoutube size={22}/></a></li>
                {/* <li><a href="https://twitter.com/thelonercoder/with_replies" target="_blank"><FaTwitter /></a></li> */}
                <li><a href="https://www.linkedin.com/in/stephon-stokley/" target="_blank"><FaLinkedinIn size={22}/></a></li>
            </ul>

            {/* <button id='emailBtn'><FaMailBulk />Email Me</button>
            <button id='resumeBtn' download={'imgs/im-here.png'}><FaDownload />Resume</button>
            <button id='projectBtn'><FaProjectDiagram />Projects</button> */}

            <a id='emailBtns'><FaMailBulk />Email Me</a>
            <a href="Thelonercoderportfolio/imgs/im-here.png" download id='resume'><FaDownload />Resume</a>
            <a id='projectBtns'><FaProjectDiagram />Projects</a>
        </article>


        {/* <HomeProjects /> */}
        <Projects/>
        <Journey/>

    </div>
  )
}

export default Home;