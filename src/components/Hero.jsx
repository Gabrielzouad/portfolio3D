import { motion } from "framer-motion"
import { styles } from "../styles"
import ComputersCanvas from "./canvas/Computers"

const Hero = () => {
  return (
    <section className='w-full h-screen relative mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#52DE97]' />
          <div className='w-1 sm:h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hei, jeg heter <span className='text-[#52DE97]'>Gabriel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-6 text-white-100`}>Jeg er en front-end utvikler med stor interresse innen UX/UI design og Javascript </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero
