import React from 'react';
import { VerticalTimeline as Timeline, VerticalTimelineElement as Elements}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/journey.css'
import { DiAndroid, DiJavascript1, DiPython, DiReact  } from "react-icons/di";
import { SiUdemy } from "react-icons/si";


function Journey() {
  return (
    <div>
      <article id='journeySection'>
        <section id='journey1'>
          picture
        </section>
          
        <section id='journey2'>
            <Timeline>
              <Elements  className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<DiAndroid />}>
                <h1 className="vertical-timeline-element-title">Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<DiPython />}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<DiJavascript1 />}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiUdemy />}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, culpa rem ducimus repellat adipisci facere hic odit esse magnam, fugiat quibusdam temporibus voluptatibus eveniet soluta quisquam blanditiis impedit! Sint, numquam.</p>
              </Elements>
              <Elements  className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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