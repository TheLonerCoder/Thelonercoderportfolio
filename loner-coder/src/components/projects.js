import React, {useState} from 'react';
import '../styles/website.css';
import { projectObject } from '../data/portfolio-data';
import { DiBootstrap as Bootstrap, DiCss3 as Css, DiHtml5 as Html5, DiJsBadge as Javascript, DiPython as Python, DiSass as Sass, DiReact, DiGithubBadge as Github } from "react-icons/di";
import { GoBrowser } from "react-icons/go";
import '../styles/portfolio.css';




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



function Projects() {

    const [title, titleChange] = useState();
    const [description, setdescription] = useState();
    const [techstack, settechstack] = useState();
    const [techlogo, setlogo] = useState();


// ? Pulls external data from an Object and converts it to JSX
    function renderData (e) {
        // if (e.target.id === projectObject[e.target.id]) {
            
        // }
        let idNum = e.currentTarget.id;

        titleChange(projectObject[idNum].name);
        setdescription(projectObject[idNum].description);
        setlogo(projectObject[idNum].logo);
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









  return (
    <div>
        <button id='ftf' onClick={renderData}>FTF</button>
        <button id='vrworld' onClick={renderData}>VR</button>
        <button id='solo' onClick={renderData}>SOLO</button>
        <button id='worldla' onClick={renderData}>WORLDLA</button>


        <h1>{title}</h1>
        <section id='imageDemo'>
            <div>
                <img src={techlogo} alt="logo" id='techlogo'/>
            </div>
            <div>
                {/* <img src={} alt="" /> */}
            </div>
        </section>

        <section id='buttonSec'>
            <a id='demoBtn'><GoBrowser />Live Demo</a>
            <a id='codebaseBtn'><Github /> Code Base</a>
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

            <h2 className='mainTitles'>Meet the Creators/Founders</h2>
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