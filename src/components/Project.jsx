import { useState } from "react"

import { ImOffice } from "react-icons/im"
import Heading from "./Heading"
import ProjectBox from "./ProjectBox"



 const projects =[
    {number:"01",
     title:"Speak Bridge",
     discription:"I participated in the TechCluster Hackathon at GNOIT, Noida, where my team and I developed SpeakBridge, a regional language learning platform. I worked on building the frontend using React.js, ensuring a responsive and user-friendly interface, and also contributed to backend development using Express.js and MongoDB. The project included real-time features such as chat using WebSockets and video calling using WebRTC to enable live interaction between users. I actively collaborated with the team in planning, development, testing, and presenting the solution during the hackathon.",
     img:"photos.jpg",
     link:"https://speakbridgeprototype.vercel.app/",
     githubLink:"https://github.com/vansh216/Team-NeoN"


    },
    {number:"02",
     title:"Gyan  Ganga",
     discription:"",
     img:"photos.jpg",

    },
    {number:"03",
     title:"My first Project",
     discription:"lvnsnvsnaddsn dnsjkdvjfjndfn sdjfaodsdaskalscn h kya ho raha h mai acha hu tum bataio kat akr rahe ho class me kay achak raha a h lahari lvnsnvsnaddsn dnsjkdvjfjndfn sdjfaodsdaskalscn h kya ho raha h mai acha hu tum bataio kat akr rahe ho class me kay achak raha a h lahari kya kar rhe ho maicha hu sdfjojdosk sdn kya kar rhe ho maicha hu sdfjojdosk sdns lvnsnvsnaddsn dnsjkdvjfjndfn sdjfaodsdaskalscn h kya ho raha h mai acha hu tum bataio kat akr rahe ho class me kay achak raha a h lahari kya kar rhe ho maicha hu sdfjojdosk sdn",
     img:"photos.jpg",

    },
  ]

const Project = () => {

  const [currentIndex,setcurrentIndex]=useState("0")

  const nextProject=()=>{
    setcurrentIndex((prev)=> (prev+1)% projects.length)
  }

  const PrevProject=()=>{
    setcurrentIndex((next)=> (next-1+ projects.length)% projects.length)
  }

  const project= projects[currentIndex]

 


  return (
    <div id="project" className="w-full flex  px-16 flex-col  md:gap-3  gap-2 md:h-screen md:px-18">
        <div className="md:w-2/5 w-3/4">
      <Heading first={"My"} second={"Project"}/>
      </div>

    <div  className=' md:w-full flex  flex-col  justify-center items-center md:h-screen   ' >
    
      
        <ProjectBox
         number={project.number}
         title={project.title}
          discription={project.discription}
           img={project.img}
           link={project.link}
           githubLink={project.githubLink} />
        
        <div className="flex  gap-7 md:justify-end md:items-start justify-center mt-3 items-center  md:px-20 ">
          <button onClick={PrevProject}>
            <img src="left.png" alt="" />
            </button>
          <button onClick={nextProject}>
            <img src="right.png" alt="" />
          </button></div>
     
      
    </div>
    </div>
  )
}

export default Project
