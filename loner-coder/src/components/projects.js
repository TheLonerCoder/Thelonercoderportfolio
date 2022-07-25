import React, {useState} from 'react';
import '../styles/website.css';


let projectObject = {
    ftf : {
        name: 'Forge The Fort',
        logo: '',
        gif: '',
        description: 'A hub for connecting people in underserved/overlooked cities across the midwest. This hub connects innovators, investors, community leaders, civilians, politicians, etc all in one place to find solutions for their specific problems, connecting people from surrounding districts, counties, cities, and - even - states. The ultimate goal is to provide people with the tools and knowledge to build up their own cities here in the Midwest.',
        tech: ['bootstrap', 'sass', 'javascript'],
        founders: '',
        concept: false

    },

    vrworld: {
        name: 'VR World',
        logo: '',
        gif: '',
        description: "A fake landing page for a VR-based company. This company specializes in VR and immersive technology and connects it's userbase to the metaverse.",
        tech: ['', 'react', 'sass', 'javascript'],
        founders: '',
        concept: false

    },

    solo: {
        name: 'Solo Innovations',
        logo: '',
        gif: '',
        description: "A platform where you can become more aware of how learning a language opens up doors. It'll give resources to learn languages, show you where you can use them, etc.",
        tech: ['react', 'bootstrap', 'sass', 'javascript'],
        founders: '',
        concept: false

    },

    worldla: {
        name: 'Worldla',
        logo: '',
        gif: '',
        description: "A platform where you can become more aware of how learning a language opens up doors. It'll give resources to learn languages, show you where you can use them, etc.",
        tech: ['react', 'bootstrap', 'sass', 'javascript'],
        founders: '',
        concept: false

    },


    imhere: {
        name: "I'm Here",
        logo: '',
        gif: '',
        description: "A portal with both a student and teacher can log into and show they're in attendance in their class.",
        tech: ['react', 'bootstrap', 'sass', 'javascript'],
        founders: '',
        concept: true

    }
}



console.log(projectObject)



function Projects() {
  return (
    <div>
        <h1>{projectObject.ftf.name}</h1>
        <p>{projectObject.ftf.description}</p>
        
        <section>
            <h2>Tech</h2>
            <p>{projectObject.ftf.tech}</p>
        </section>
    </div>
  )
}

export default Projects