import React from 'react';
import { VerticalTimeline as Timeline, VerticalTimelineElement as Elements}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/journey.css'
import { DiAndroid, DiJavascript1, DiPython, DiReact  } from "react-icons/di";
import { SiUdemy } from "react-icons/si";


function Journey() {
  return (
    <div>
      <h2>My Experiences</h2>
      <article id='journeySection'>


        <section id='journey1'>
          <h3>Technical Competencies</h3>
          <p>
          
          <ul>
            <li>
              <h4>React</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>Javascript</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>HTML</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>CSS</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>SASS/SCSS</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>Three.js</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>Node.js</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>Express.js</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>Python</h4>
              <div className="bar"><div className='success'></div></div>
            </li>

            <li>
              <h4>MongoDB</h4>
              <div className="bar"><div className='success'></div></div>

            </li>

          </ul>
          








</p>
          picture
        </section>
          
        <section id='journey2'>
            <h3>My Web Development Journey</h3>
            <Timeline>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'white', color: '#00df7f' }}
                icon={<DiAndroid />}>
                <h1 className="vertical-timeline-element-title">Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'white', color: '#3772a5' }}
                icon={<DiPython />}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: '#f0db4f', color: 'black' }}
                icon={<DiJavascript1 />}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: '#be32f5', color: '#fff' }}
                icon={<SiUdemy />}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'black', color: '#63dcfb' }}
                icon={<DiReact />}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
            </Timeline>
        </section>
      </article>
    </div>
  )
}

export default Journey