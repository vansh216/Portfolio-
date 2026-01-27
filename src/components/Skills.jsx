import React from 'react'
import Heading from './Heading'
import Button from './Button'
import SkillBox from './SkillBox'
import { Link as ScrollLink } from 'react-scroll'

const button = [
  { to: "0", path: "Languages" },
  { to: "1", path: "Frameworks & Technologies" },
  { to: "2", path: "Tools" },
  { to: "3", path: "Platforms" },
  { to: "4", path: "Technical Skills" },
  { to: "5", path: "Soft Skills" },
]

const skillBox = [
  [
    { img: "js.png" },
    { img: "ts.png" },
    { img: "html.png" },
    { img: "py.png" },
    { img: "c++.png" },
  ],
  [
    { img: "react.png" },
    { img: "tailwind-css.png" },
    { img: "aws.png" },
    { img: "node-js.png" },
    { img: "express-js.png" },
    { img: "git.png" },
    { img: "github.png" },
    { img: "css.png" },
    { img: "canva.png" },
    { img: "figma.png" },
  ],
  [
    { img: "excel.png" },
    { img: "powerpoint.png" },
    { img: "power.png" },
  ],
  [
    { img: "vs.png" },
    { img: "jupyter.png" },
    { img: "photo.png" },
  ],
  [
    { img: "photo.png" },
    { img: "photo.png" },
    { img: "photo.png" },
  ],
  [
    { img: "photo.png" },
    { img: "photo.png" },
    { img: "photo.png" },
  ],
]

const Skills = () => {
  return (
    <div
      id='skills'
      className='flex md:flex-row flex-col items-center justify-center md:items-start md:px-18 md:justify-around w-full h-screen'
    >

      <div className='md:w-2/5 w-3/4 text-white'>
        <Heading first={"My"} second={"Skills"} />

        <p className='px-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className='hidden md:flex flex-col items-center mt-4'>
          {button.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              containerId="skillsContainer"
              
              
            >
              <Button name={link.path} />
            </ScrollLink>
          ))}
        </div>
      </div>
      <div className='md:w-3/5 w-3/4 text-white'>
        <Heading first={"In"} second={"Details"} />

        <div
          id="skillsContainer"
          className='h-100 overflow-y-scroll px-3'
        >
          {skillBox.map((skills, index) => (
            <div
              key={index}
              id={String(index)}
              className='grid grid-cols-3 gap-4 py-4'
            >
              {skills.map((skill, i) => (
                <SkillBox key={i} img={skill.img} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
