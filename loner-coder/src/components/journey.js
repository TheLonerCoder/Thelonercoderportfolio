import React from 'react';
import { VerticalTimeline as Timeline, VerticalTimelineElement as Elements}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/journey.css'
import { DiAndroid, DiJavascript1, DiPython, DiReact, DiBootstrap, DiCss3, DiHtml5, DiJsBadge,  DiSass, DiGithubBadge, DiGit, DiNodejsSmall, DiNodejs } from "react-icons/di";
import { SiUdemy, SiYoutube, SiPostman, SiExpress, SiMongodb, SiTypescript, SiYarn, SiStyledcomponents } from "react-icons/si";
import styled, { keyframes } from 'styled-components';
import {fadeInDown} from 'react-animations';


// let certClick = {
  
// }



function Journey() {
  return (
    <div id='ExperienceContainer'>
      <h2>My Experiences</h2>
      <article id='journeySection'>


      <section id='journey1'>

        {/* <div id='frontend'> */}
          <h3>Certifications</h3>
          <ul
          id='certSection'>
            <a href="Thelonercoderportfolio/imgs/NucampCert.pdf" target="_blank"><img src="Thelonercoderportfolio/imgs/cert.webp" alt="cert" id='cert'/></a>
            <li><i><h4> Nucamp </h4>(Full Stack & Mobile Development) </i></li>
            <li></li>
          </ul>
        {/* </div> */}


          

        <div id="techSection">
            <h3>Technical Competencies</h3>
            
            <div>
              <h4>Front End</h4>
              
              <ul className='skillList'>
              {/* size = {20} */}
              
                <li><div className='divIcons'><DiReact size={'2rem'} title="React" id="reactIcon"/> <p style={{marginTop: '0'}}>React</p></div></li>

                <li><div className='divIcons'><DiJavascript1 size={'2rem'} title="Javascript" id="jsIcon"/><p style={{marginTop: '0'}}>Javascript</p></div></li>

                <li><div className='divIcons'><DiSass size={'2rem'} title="Sass" id="sassIcon"/><p style={{marginTop: '0'}}>SASS</p></div> </li>

                <li><div className='divIcons'><DiBootstrap size={'2rem'} title="Bootstrap" id="bootstrapIcon"/><p style={{marginTop: '0'}}>Bootstrap</p></div> </li>

                <li><div className='divIcons'><SiStyledcomponents size={'2rem'} title="Styled Components" id="styleIcon"/><p style={{marginTop: '0'}}>Styled <br/> Components</p></div> </li>
                {/* <li><SiTypescript size={'2rem'}/> </li> */}
                {/* <li><DiCss3 size={'2rem'}/> </li>
                <li><DiHtml5 size={'2rem'}/> </li> */}
              </ul>
            </div>


          <div>
            <h4>Back End</h4>

            <ul className='skillList'>
            <li><div className='divIcons'><DiPython size={'2rem'} title="Python" id="pythonIcon"/> <p style={{marginTop: '0'}}>Python</p></div></li>

            <li><div className='divIcons'><SiExpress size={'1.5rem'} title="Express.js" id="expressIcon"/> <p style={{marginTop: '0'}}>Express</p></div></li>

            <li><div className='divIcons'><DiNodejsSmall size={'2rem'} title="Node.js" id="nodeIcon"/> <p style={{marginTop: '0'}}>Node js</p></div></li>

            <li><div className='divIcons'><SiMongodb size={'1.5rem'} title="MongoDb" id="mongoIcon"/> <p style={{marginTop: '0'}}>MongoDb</p></div></li>
            </ul>
          </div>

          <div>
            <h4>Other</h4>
            
            <ul className='skillList'>
            <li><div className='divIcons'><DiGit size={'2rem'} title="Git" id="gitIcon"/> <p style={{marginTop: '0'}}>Git</p></div></li>

            <li><div className='divIcons'><SiPostman size={'1.5rem'} title="Postman" id="postmanIcon"/> <p style={{marginTop: '0'}}>Postman</p></div></li>

            <li><div className='divIcons'><SiYarn size={'1.5rem'} title="Yarn (Package Manager)" id="yarnIcon"/> <p style={{marginTop: '0'}}>Yarn</p></div></li>
            </ul>
          </div>

          {/* <div>
            <h4>Test</h4>
            
            <ul>
            <li><div className='divIcons'> <DiGit size={'2rem'} title="Git" id="gitIcon2"/> <p style={{marginTop: '0'}}>test</p></div> </li>
            <li><SiPostman size={'1.5rem'} title="Postman2" id="postmanIcon2"/> </li>
            <li><SiYarn size={'1.5rem'} title="Yarn (Package Manager)" id="yarnIcon2"/> </li>
            </ul>
          </div> */}
        </div>

      </section>


          
        <section id='journey2'>
            <h3>My Web Development Journey</h3>
            <Timeline>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2019 - 2019"
                iconStyle={{ background: 'white', color: '#00df7f' }}
                icon={<DiAndroid />}>
                <h1 className="vertical-timeline-element-title">Introduction to Coding</h1>
                <p>I started my journey into coding with an Android App Development & Entrepreneurship Bootcamp. At the time, I was heavily invested in learning about entrepreneurship and felt i could get an edge by learning to code.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2019 - present"
                iconStyle={{ background: 'white', color: '#3772a5' }}
                icon={<DiPython />}>
                <h1>Python</h1>
                <p>Eventhough I enjoyed coding, I had no specific interest in mobile development. So I experimented with Python and basic HTML/CSS. I created a few basic programs and websites.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020 - present"
                iconStyle={{ background: '#f0db4f', color: 'black' }}
                icon={<DiJavascript1 />}>
                <h1>Introduction to Javascript</h1>
                <p>I did more research and learned towards Web Development, especially since I already knew HTML/CSS at this point. Because I had prior Python knowledge, I found the basic syntax fairly easy to pickup.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021 - present"
                iconStyle={{ background: '#be32f5', color: '#fff' }}
                icon={<SiUdemy />}>
                <h1>Taking Web Development Seriously</h1>
                <p>It wasn't until 2021 where I doubled down and saw Web Development as a career. So I started my <br /><span id='youtube'><a href=""><SiYoutube />Youtube Channel</a></span> <br /> where I documented some of my journey.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021 - present"
                iconStyle={{ background: 'black', color: '#63dcfb' }}
                icon={<DiReact />}>
                <h1>Bootcamp</h1>
                <p>I then attended another Bootcamp (<i>Nucamp</i>) after taking Udemy Courses to solidfy what I was learning in a classroom setting.</p>
              </Elements>
            </Timeline>
        </section>
      </article>
    </div>
  )
}

export default Journey