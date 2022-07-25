import React from 'react';
import { VerticalTimeline as Timeline, VerticalTimelineElement as Elements}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/journey.css'
import { DiAndroid, DiJavascript1, DiPython, DiReact  } from "react-icons/di";
import { SiUdemy, SiYoutube } from "react-icons/si";


function Journey() {
  return (
    <div id='ExperienceContainer'>
      <h2>My Experiences</h2>
      <article id='journeySection'>


        <section id='journey1'>
          <h3>Technical Competencies</h3>
          <p>Represention of the usage/comfortability level of these languages, frameworks, and libraries in my projects</p>
          
          <ul id='languages'>
            <li>
              <h4>React</h4>
              <div className="bar"><div className='reactBar'></div></div>
            </li>

            <li>
              <h4>Javascript</h4>
              <div className="bar"><div className='javascriptBar'></div></div>
            </li>

            <li>
              <h4>HTML</h4>
              <div className="bar"><div className='htmlBar'></div></div>
            </li>

            <li>
              <h4>CSS</h4>
              <div className="bar"><div className='cssBar'></div></div>
            </li>

            <li>
              <h4>SASS/SCSS</h4>
              <div className="bar"><div className='sassBar'></div></div>
            </li>

            <li>
              <h4>Python</h4>
              <div className="bar"><div className='pythonBar'></div></div>
            </li>


            <li>
              <h4>Node.js</h4>
              <div className="bar"><div className='nodeBar'></div></div>
            </li>

            <li>
              <h4>Express.js</h4>
              <div className="bar"><div className='expressBar'></div></div>
            </li>


            <li>
              <h4>MongoDB</h4>
              <div className="bar"><div className='mongoBar'></div></div>
            </li>

            <li>
              <h4>Three.js</h4>
              <div className="bar"><div className='threeBar'></div></div>
            </li>
          </ul>
          
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