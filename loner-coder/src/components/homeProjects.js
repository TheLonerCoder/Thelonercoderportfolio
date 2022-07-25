import React, {useState} from 'react';
import '../styles/home.css';



function HomeProjects() {

  const [port, generatePort] = useState({visibility: 'collapse'})
  

  function fullPort (){
    generatePort({visibility: 'visible'})
  }


  return (
    <div className='homeProjects'>
        <h2>Project Highlights</h2>
        <section id='imageBox'>
            <a href=""><img src="imgs/Forge-the-Fort.jpg" alt="" className='placeholders'/></a>
            <a href=""><img src="imgs/VR-WORLD.jpg" alt="" /></a>
            <a href=""><img src="imgs/solo.jpg" alt="" /></a>
            <a href=""><img src="imgs/worlda-green.jpg" alt="" /></a>
            <a href="" style={port} id='concepts'><img src="imgs/im-here.png" alt="" id='imHere'/></a>
        </section>

        <button id='portBtn' onClick={fullPort}>Full Porfolio</button>
    </div>
  )
}

export default HomeProjects;