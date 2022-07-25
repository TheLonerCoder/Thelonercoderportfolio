import React, {useState} from 'react';
import '../styles/website.css';
import { projectObject } from '../data/portfolio-data';
import { DiBootstrap as Bootstrap, DiCss3 as Css, DiHtml5 as Html5, DiJsBadge as Javascript, DiPython as Python, DiSass as Sass, DiReact } from "react-icons/di";




let converter = {
    bootstrap: <Bootstrap />,
    sass: <Sass />,
    css: <Css />,
    react: <DiReact />,
    html: <Html5 />,
    javascript: <Javascript />,
    python: <Python />
}


// console.log(projectObject)



function Projects() {

    const [title, titleChange] = useState();
    const [description, setdescription] = useState();
    const [techstack, settechstack] = useState();


// ? Pulls external data from an Object and converts it to JSX
    function renderData (e) {
        // if (e.target.id === projectObject[e.target.id]) {
            
        // }
        let idNum = e.currentTarget.id;

        titleChange(projectObject[idNum].name);
        setdescription(projectObject[idNum].description);
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

        <section>
            <button id='demoBtn'>Live Demo</button>
            <button id='codebaseBtn'>Code Base</button>
        </section>
        
        <section>
            <h2>About the Project</h2>
            <p>{description}</p>
            <h2>Tech</h2>
            {/* <p>{techstack}</p> */}
            <p>
                {/* {techstack.map(item => {
                    return (<li>{item}</li>)
                })} */}

                {techstack}
            </p>
            <h2>Meet the Creators/Founders</h2>
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