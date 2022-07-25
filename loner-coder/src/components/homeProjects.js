import React from 'react';
import '../styles/home.css';

function HomeProjects() {
  return (
    <div className='homeProjects'>
        <h2>Project Highlights</h2>
        <section id='imageBox'>
            <a href=""><img src="imgs/Forge-the-Fort.jpg" alt="" className='placeholders'/></a>
            <a href=""><img src="imgs/VR-WORLD.jpg" alt="" /></a>
            <a href=""><img src="imgs/solo.jpg" alt="" /></a>
            <a href=""><img src="imgs/worlda-green.jpg" alt="" /></a>
        </section>

        <button id='portBtn'>Full Porfolio</button>
    </div>
  )
}

export default HomeProjects;