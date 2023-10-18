import React, {useState} from 'react';
import '../styles/website.css';
import { projectObject } from '../data/portfolio-data';
import { DiBootstrap as Bootstrap, DiCss3 as Css, DiHtml5 as Html5, DiJsBadge as Javascript, DiPython as Python, DiSass as Sass, DiReact, DiGithubBadge as Github } from "react-icons/di";
import { GoBrowser } from "react-icons/go";
import { MdNavigateBefore as LeftArrow, MdNavigateNext as RightArrow } from "react-icons/md";
import '../styles/portfolio.css';
import '../styles/home.css';
import styled, { keyframes } from 'styled-components';
import {fadeInDown, fadeInDownBig, flash, slideInLeft, zoomIn, fadeIn} from 'react-animations';
import { Link } from 'react-scroll';
import ViteSvg from './other/viteSvg';






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


// ? Styling

const ArrowFlexContainer = styled.div `
    display: flex;
    flex-direction: row;
`

const ArrowNavigation = styled.div `
    display: inline-block;
    ${'' /* height: 185.183px; */}


    svg {
        color: grey;

        &:hover {
            color: white;
            cursor: pointer;
        }
    }
`


const ArrowBoxFlex = styled.div `

    display: flex;
    flex-direction: row;
    ${'' /* justify-content: center; */}
    align-items: center;
    height: 185.183px;

`

let blueBackground = {
    backgroundColor: '#2d9bf5'
}
let greyBackground = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
}



// ? Animations
const slideAnimation = keyframes `${slideInLeft}`;
const SlideDiv = styled.div `
    animation: 2s ${slideAnimation}
`;


const flashAnimation = keyframes `${flash}`;
const FlashDiv = styled.div `
    animation: infinite ${flashAnimation}
`

const zoomAnimation = keyframes `${zoomIn}`;
const ZoomDiv = styled.div `
    animation: 3s ${zoomAnimation}
`


const fadeAnimation = keyframes `${fadeIn}`;
const Fadeh1 = styled.h1 `
    animation: 2s ${fadeAnimation}
`



let converter = {
    bootstrap: <Bootstrap id='bootstrap' title='Bootstrap'/>,
    sass: <Sass id='sass' title="Sass"/>,
    css: <Css id='css' title="Css"/>,
    react: <DiReact id='react' title="React"/>,
    html: <Html5 id='html5' title="Html5"/>,
    javascript: <Javascript id='javascript' title="Javascript"/>,
    python: <Python id='python' title="Python"/>,
    vite: <ViteSvg id='vite' title='Vite'/>
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




// function NumberTabs () {

//     function changeProjectButton (e) {
//         let projectID = e.currentTarget.id;


//     }


//     return (
//         <div id='numberTabs'>
//             <ul>
//                 <li id='ftf'>1</li>
//                 <li id='vrworld'>2</li>
//                 <li id='solo'>3</li>
//                 <li id='worldla'>4</li>
//                 <li id='imhere'>5</li>
//             </ul>
//         </div>
//     )
// }



function Projects() {

    const [title, titleChange] = useState();
    const [description, setdescription] = useState();
    const [techstack, settechstack] = useState();
    const [techlogo, setlogo] = useState();
    const [codebase, setcodebase] = useState();
    const [previmage, setprevimage] = useState();
    const [projectTitle, setprojectTitle] = useState('Project Highlights');
    const [projectVisible, setprojectVisible] = useState(hideProjects);
    const [buttonSelected, changeSelected] = useState(greyBackground)
    const [buttonBG, changeButtonBG] = useState()

    const [projectSwitch, setProject] = useState();
    const [projectID, setProjectID] = useState();
    const [numValue, changeValue] = useState();
    
    // const [highlightedProject, sethighlightedProject] = useState(null);
    // const [selectedProject, setselectedProject] = useState();

    
    let positionArray = ['ftf', 'vrworld', 'solo', 'worldla'];

    function buttonProject () {

    }


    function NumberTabs () {

    
    
        return (
            <div className='numberTabs'>
                <ul>
                    <li onClick={Test}>0</li>
                    <li className='ftf' onClick={renderData} >1</li>
                    <li className='vrworld' onClick={renderData} >2</li>
                    <li className='solo' onClick={renderData} >3</li>
                    <li className='worldla' onClick={renderData} >4</li>
                    <li className='imhere' onClick={renderData} >5</li>
                </ul>
            </div>
        )
    }


    function NumberTabsRight () {    
        return (
            <div className='numberTabs' id='numberTabsRight'>
                <ul>
                    <li onClick={Test}>0</li>
                    <li className='ftf' onClick={renderData} >1</li>
                    <li className='vrworld' onClick={renderData} >2</li>
                    <li className='solo' onClick={renderData} >3</li>
                    <li className='worldla' onClick={renderData} >4</li>
                    <li className='imhere' onClick={renderData} >5</li>
                </ul>
            </div>
        )
    }

    function Test (e) {
        
        e.currentTarget.style.backgroundColor = "#2d9bf5";

    }

// ? Pulls external data from an Object and converts it to JSX
    function renderData (e) {
        // if (e.target.id === projectObject[e.target.id]) {
            
        // }
        // Test();
        
        let idNum = e.currentTarget.className;
        changeButtonBG(blueBackground);

        titleChange(projectObject[idNum].name);
        setdescription(projectObject[idNum].description);
        setlogo(projectObject[idNum].logo);
        setcodebase(projectObject[idNum].codebase);
        setprevimage(projectObject[idNum].prev);
        setprojectVisible(null);
        // e.currentTarget.style.backgroundColor = "#2d9bf5";
        e.currentTarget.style = buttonBG;
        
        // e.currentTarget. style.visibility = 'hidden';
        // console.log(`style: ${e.currentTarget.style.backgroundColor}`)
        console.log(`style: ${e.currentTarget.style}`)
        // changeSelected(blueBackground);
        

        // console.log(`Before1 ${numValue}`);
        
        // // ? Find the position in the project and change it
        // changeValue(positionArray.indexOf(idNum) + 1);
        // console.log(`Before2 ${numValue}`);



            // console.log(`projectID: ${projectSwitch}`);

    
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


let value = numValue;

    function changeProjectNext (e) {
        // console.log(`ID:${e.target.id}`)
        console.log(value)
        let position = positionArray[value];

        if (e.currentTarget.id === 'next' && value <= 4) {

            value = value + 1;
    
            console.log(`before: ${value}`)
    
            
            titleChange(projectObject[position].name);
            setdescription(projectObject[position].description);
            setlogo(projectObject[position].logo);
            setcodebase(projectObject[position].codebase);
            setprevimage(projectObject[position].prev);
        } else if (value > 0) {
            
            value--;
            
            console.log(`prev: ${value}`)

            titleChange(projectObject[position].name);
            setdescription(projectObject[position].description);
            setlogo(projectObject[position].logo);
            setcodebase(projectObject[position].codebase);
            setprevimage(projectObject[position].prev);
        }
        // setProjectID(positionArray.findIndex(projectSwitch));
        // ^ finds current position of selected project
        // setprojectVisible(null);

    }


    // function changeProjectPrevious () {

    //     // setProjectID(positionArray.findIndex(projectSwitch));
    //     // ^ finds current position of selected project
    //     changeValue(numValue - 2);
        
    //     console.log(`prev: ${numValue}`)

    //     let position = positionArray[numValue];
    //     titleChange(projectObject[position].name);
    //     setdescription(projectObject[position].description);
    //     setlogo(projectObject[position].logo);
    //     setcodebase(projectObject[position].codebase);
    //     setprevimage(projectObject[position].prev);
    //     // setprojectVisible(null);

    // }




// ? Hides concept projects
    // const [port, generatePort] = useState({visibility: 'collapse'})
    const [port, generatePort] = useState({display: 'none'})
  

    function fullPort (){
    //   generatePort({visibility: 'visible'})
      generatePort({display: 'block'})

      setprojectTitle('Portfolio')


    }



    function idtest (e) {
        console.log(e.target.id);
    }


  return (
    <div className='projectsUrl'>

            {/* <zoomDiv style={{backgroundColor: 'red', width: '200px', height: '200px'}}>
                testing
            </zoomDiv> */}
        {/* <button id='ftf' onClick={renderData}>FTF</button>
        <button id='vrworld' onClick={renderData}>VR</button>
        <button id='solo' onClick={renderData}>SOLO</button>
        <button id='worldla' onClick={renderData}>WORLDLA</button> */}
      

        {/* <HomeProject /> */}

    <div className='homeProjects'>
        <h2 id='portfolioTitle'>{projectTitle}</h2>
        <section id='imageBox'>
            <Link  className='ftf' onClick={renderData} to='scrollTo' smooth={true} offset={0} duration={1000}><img src="Thelonercoderportfolio/imgs/Forge-the-Fort.jpg" alt="" className='placeholders'/></Link>
            <Link className='vrworld' onClick={renderData} to='scrollTo' smooth={true} offset={0} duration={1000}><img src="Thelonercoderportfolio/imgs/VR-WORLD.jpg" alt=""/></Link>
            <Link className='solo' onClick={renderData} to='scrollTo' smooth={true} offset={0} duration={1000}><img src="Thelonercoderportfolio/imgs/solo.jpg" alt=""/></Link>
            <Link className='worldla' onClick={renderData} to='scrollTo' smooth={true} offset={0} duration={1000}><img src="Thelonercoderportfolio/imgs/worlda-green.jpg" alt=""/></Link>
            <ZoomDiv style={port}><Link className='concepts' to='scrollTo' smooth={true} offset={0} duration={1000}><img src="Thelonercoderportfolio/imgs/im-here.png" alt="" id='imHere'/></Link></ZoomDiv>
        </section>

        <button id='portBtn' onClick={fullPort}>Full Porfolio</button>

        </div>


    <div id='scrollTo'></div>

    <section className="projectInfo" style={projectVisible}>
    <SlideDiv>
         <h1 style={{color: 'white'}}>{projectID}</h1>
        
        <h1 id='projectTitles'><span>{title}</span></h1>
        
        <section id='imageDemo'>
            <div id='demo1'>
                {/* <ArrowFlexContainer> */}
                    {/* <ArrowBoxFlex>
                        <ArrowNavigation title='previous' onClick={changeProjectNext} id="previous">
                            <LeftArrow size={'3rem'}/>
                        </ArrowNavigation>
                    </ArrowBoxFlex> */}
            
                    {/* <ArrowBoxFlex>
                        <ArrowNavigation title='next' onClick={changeProjectNext} id="next">
                            <RightArrow size={'3rem'} />
                        </ArrowNavigation>
                    </ArrowBoxFlex>     */}
                {/* </ArrowFlexContainer> */}
                <div id='tabPics'>
                    <NumberTabs />
                    <img src={techlogo} alt="logo" id='techlogo'/>
                    <NumberTabsRight  id='mobileTabs'/>            
                </div>

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

                    <div>
                        <h2 className='mainTitles'>Project Status</h2>
                    </div>
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

                    <div>
                        <h2 className="mainTitles">APIs Used</h2>
                    </div>
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