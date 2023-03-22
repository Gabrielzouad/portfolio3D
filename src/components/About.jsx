import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

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
        Jeg er en utvikler med en bred erfaring innen IT og logistikk, som virkelig elsker å utforske nye utfordringer. Jeg har en sterk kompetanse innen EDI, API og kommunikasjon mellom systemer, samt en solid teknisk bakgrunn i HTML, CSS, JavaScript og React. Jeg er også kjent med verktøy som Github, NextJS, ESlint og Jest, og elsker å holde meg oppdatert på nye teknologier og verktøy.
<br />
Men det er ikke bare teknologien som driver meg fremover. Jeg er også kjent for å være en effektiv og løsningsorientert person med gode samarbeidsevner. Jeg tar alltid ansvar for mitt arbeid, og sørger for å være strukturert og organisert i alt jeg gjør.<br />

En annen lidenskap for meg er design, og jeg elsker å bruke mine ferdigheter i designverktøy som Adobe Photoshop, Illustrator og Figma til å skape vakre og brukervennlige nettsider. Jeg tror på å skape engasjerende brukeropplevelser som gjør at folk kommer tilbake for mer.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
