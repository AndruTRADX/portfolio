import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles/styles'
import LazyImg from './utils/LazyImage'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="sm:inline-block hidden">Hola, </span>Yo soy{' '}
            <span className="text-[#915EFF]">Andrés</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            Desarrollador fullstack apasionado por el mundo de la tecnología.
          </p>
        </div>
      </div>

      <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] p-[2px] green-pink-gradient rounded-full absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LazyImg
          className="w-full rounded-full top-0"
          src="https://i.ibb.co/X86ZbrY/Whats-App-Image-2022-10-07-at-10-02-43-AM.jpg"
          alt="Este soy yo, bien guapo"
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Conóceme">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
