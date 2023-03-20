import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px font-bold] text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduksjon</p>
        <h2 className={styles.sectionHeadText}>Hvem er jeg?</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Jeg er en utvikler med en variert bakgrunn og erfaring innen IT og logistikk, samt god kunnskap om EDI, API og kommunikasjon mellom systemer. Jeg har også solid teknisk ekspertise i HTML, CSS,
        JavaScript og React, og erfaring med verktøy som Github, NextJS, ESlint og Jest. I tillegg til mine tekniske ferdigheter Jeg er en løsningsorientert og effektiv person med gode
        samarbeidsevner, og er ansvarsbevisst og strukturert i mitt arbeid. Jeg har tillit til min evne til å skape visuelt tiltalende og brukervennlig nettsted takket være min erfaring i
        designverktøy som Adobe Photoshop, Illustrator og Figma.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About
