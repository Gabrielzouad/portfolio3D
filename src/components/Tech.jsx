import React from "react"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <>
      <h1 className='text-4xl text-center py-10 font-black'>Technologies</h1>
      <div className='flex flex-row flex-wrap justify-center gap-20'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 ' key={technology.name}>
            <img src={technology.icon} alt={technology.name} />
            <p className='justify-center flex py-3'>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")
