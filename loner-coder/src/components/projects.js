import React, {useState} from 'react';
import '../styles/website.css';
import { projectObject } from '../data/portfolio-data';
import { DiBootstrap as Bootstrap, DiCss3 as Css, DiHtml5 as Html5, DiJsBadge as Javascript, DiPython as Python, DiSass as Sass, DiReact, DiGithubBadge as Github } from "react-icons/di";
import { GoBrowser } from "react-icons/go";
import '../styles/portfolio.css';
import '../styles/home.css';
import styled, { keyframes } from 'styled-components';
import {fadeInDown, fadeInDownBig, flash, slideInLeft} from 'react-animations';






// TODO Highlight (border) selected project when you click on it
// TODO Hide the project box info if nothing is selected
// TODO update pictures for the projects and "creators" section
// TODO change links and animate scroll when you click on one 
// TODO resume button and project links
// TODO resposive layout 
// TODO update email me button to open gmail or some web mail app
// TODO blinking "|" after developer
// TODO go live
// TODO center icons on buttons
// TODO react animations

// TODO Remove or change bar section to "skills"
// TODO React router
// TODO
// TODO


// ? Animations
const slideAnimation = keyframes `${slideInLeft}`;
const SlideDiv = styled.div `
    animation: 2s ${slideAnimation}
`;


const flashAnimation = keyframes `${flash}`;
const FlashDiv = styled.div `
    animation: infinite ${flashAnimation}
`



let converter = {
    bootstrap: <Bootstrap id='bootstrap' title='Bootstrap'/>,
    sass: <Sass id='sass' title="Sass"/>,
    css: <Css id='css' title="Css"/>,
    react: <DiReact id='react' title="React"/>,
    html: <Html5 id='html5' title="Html5"/>,
    javascript: <Javascript id='javascript' title="Javascript"/>,
    python: <Python id='python' title="Python"/>
}


// console.log(projectObject)


let hideProjects = {
    // visibility: 'collapse'
    display: 'none'
    // visibility: 'visible'
}


let highlightedProjects = {
    border: 'solid #2d9bf5 5px'
}

let tested = {
    border: 'solid #2d9bf5 5px'
}




function Projects() {

    const [title, titleChange] = useState();
    const [description, setdescription] = useState();
    const [techstack, settechstack] = useState();
    const [techlogo, setlogo] = useState();
    const [codebase, setcodebase] = useState();
    const [previmage, setprevimage] = useState();
    const [projectTitle, setprojectTitle] = useState('Project Highlights');
    const [projectVisible, setprojectVisible] = useState(hideProjects);
    // const [highlightedProject, sethighlightedProject] = useState(null);
    // const [selectedProject, setselectedProject] = useState();


// ? Pulls external data from an Object and converts it to JSX
    function renderData (e) {
        // if (e.target.id === projectObject[e.target.id]) {
            
        // }
        let idNum = e.currentTarget.id;

        titleChange(projectObject[idNum].name);
        setdescription(projectObject[idNum].description);
        setlogo(projectObject[idNum].logo);
        setcodebase(projectObject[idNum].codebase);
        setprevimage(projectObject[idNum].prev);
        setprojectVisible(null);
        // sethighlightedProject(highlightedProjects);
        // setselectedProject(idNum.style = {tested});
        
        // settechstack(projectObject[idNum].tech);
        // console.log(projectObject[idNum].tech);

        // projectObject[idNum]
        // iconConvert();



        
        // ? Converts the techstack data to imported Icon SVGs and the "converter" Object
        settechstack((projectObject[idNum].tech).map(x => {
            // console.log(`${converter[x]}`)
           return converter[x];
        }
        ))

    }

// ? Hides concept projects
    const [port, generatePort] = useState({visibility: 'collapse'})
  

    function fullPort (){
      generatePort({visibility: 'visible'})

      setprojectTitle('Portfolio')


    }





  return (
    <div className='projectsUrl'>
        {/* <button id='ftf' onClick={renderData}>FTF</button>
        <button id='vrworld' onClick={renderData}>VR</button>
        <button id='solo' onClick={renderData}>SOLO</button>
        <button id='worldla' onClick={renderData}>WORLDLA</button> */}
      

        {/* <HomeProject /> */}

    <div className='homeProjects'>
        <h2>{projectTitle}</h2>
        <section id='imageBox'>
            <a  id='ftf' onClick={renderData}><img src="Thelonercoderportfolio/imgs/Forge-the-Fort.jpg" alt="" className='placeholders'/></a>
            <a id='vrworld' onClick={renderData}><img src="Thelonercoderportfolio/imgs/VR-WORLD.jpg" alt=""/></a>
            <a id='solo' onClick={renderData}><img src="Thelonercoderportfolio/imgs/solo.jpg" alt=""/></a>
            <a id='worldla' onClick={renderData}><img src="Thelonercoderportfolio/imgs/worlda-green.jpg" alt=""/></a>
            <a style={port} id='concepts'><img src="Thelonercoderportfolio/imgs/im-here.png" alt="" id='imHere'/></a>
        </section>

        <button id='portBtn' onClick={fullPort}>Full Porfolio</button>

        </div>



    <section className="projectInfo" style={projectVisible}>
    <SlideDiv>
        <h1>{title}</h1>
        <section id='imageDemo'>
            <div id='demo1'>
                <img src={techlogo} alt="logo" id='techlogo'/>
                <section id='buttonSec'>
                    <a id='demoBtn'><GoBrowser />Live Demo</a>
                    <a id='codebaseBtn'  href={codebase} target="_blank" rel="noreferrer noopener"><Github /> Code Base</a>
                </section>
            </div>
            <div id='demo2'>
                <img src={previmage} alt="previmg" id='previmg'/>
                {/* <img src={} alt="" /> */}
            </div>
        </section>

        
        <section id="projectBody">
            <div id='gridBody'>
                <div id='grid1'>
                    <h2 className='mainTitles'>About the Project</h2>
                    <p>{description}</p>
                </div>
                <div id='grid2'>
                    <h2 className='mainTitles'>Technologies Used</h2>
                    {/* <p>{techstack}</p> */}
                    <h1>
                        {/* {techstack.map(item => {
                            return (<li>{item}</li>)
                        })} */}

                        {techstack}
                    </h1>
                </div>
            </div>

            {/* <h2 className='mainTitles'>Meet the Creators/Founders</h2> */}
        </section>
    </SlideDiv>
    </section>

        {/* <h1>{projectObject.ftf.name}</h1>
        <p>{projectObject.ftf.description}</p>
        
        <section>
            <h2>Tech</h2>
            <p>{projectObject.ftf.tech}</p>
        </section> */}
    </div>
  )
}

export default Projects