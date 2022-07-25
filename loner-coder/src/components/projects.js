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



// console.log(projectObject)



function Projects() {

    const [title, titleChange] = useState();
    const [description, setdescription] = useState();
    const [techstack, settechstack] = useState();


    function renderData (e) {
        // if (e.target.id === projectObject[e.target.id]) {
            
        // }
        let idNum = e.currentTarget.id;

        titleChange(projectObject[idNum].name);
        setdescription(projectObject[idNum].description);
        settechstack(projectObject[idNum].tech);

        // projectObject[idNum]

    }


  return (
    <div>
        <button id='ftf' onClick={renderData}>FTF</button>
        <button id='vrworld' onClick={renderData}>VR</button>
        <button id='solo' onClick={renderData}>SOLO</button>
        <button id='worldla' onClick={renderData}>WORLDLA</button>


        <h1>{title}</h1>
        <p>{description}</p>
        
        <section>
            <h2>Tech</h2>
            <p>{techstack}</p>
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