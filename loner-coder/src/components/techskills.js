import React from "react";


function Skills () {
    return (
        <div>
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
        </div>
    )
}