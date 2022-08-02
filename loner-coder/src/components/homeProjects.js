import React, {useState} from 'react';
// import '../styles/home.css';
// import Projects from './projects';



function HomeProjects() {

  const [port, generatePort] = useState({visibility: 'collapse'})
  

  function fullPort (){
    generatePort({visibility: 'visible'})
  }


  return (
    <div className='homeProjects'>
        <h2>Project Highlights</h2>
        <section id='imageBox'>
            <a  id='ftf'><img src="Thelonercoderportfolio/imgs/Forge-the-Fort.jpg" alt="" className='placeholders'/></a>
            <a id='vrworld'><img src="Thelonercoderportfolio/imgs/VR-WORLD.jpg" alt="" /></a>
            <a id='solo'><img src="Thelonercoderportfolio/imgs/solo.jpg" alt="" /></a>
            <a id='worldla'><img src="Thelonercoderportfolio/imgs/worlda-green.jpg" alt="" /></a>
            <a style={port} id='concepts'><img src="imgs/im-here.png" alt="" id='imHere'/></a>
        </section>

        <button id='portBtn' onClick={fullPort}>Full Porfolio</button>

        {/* <Projects /> */}
    </div>
  )
}

export default HomeProjects;