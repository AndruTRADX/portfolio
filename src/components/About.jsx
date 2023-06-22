import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles/styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ServiceCard from './ServiceCard'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Sobre mí</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Mi experiencia se centra en la creación de soluciones completas y
        escalables utilizando tecnologías de JavaScript. Tengo un profundo
        conocimiento de Next.js y Nest.js.
        <br />
        <br />
        Me encanta enfrentar desafíos y encontrar soluciones creativas. Mi
        filosofía es entregar productos de alta calidad, tanto en el frontend
        como en el backend. Como apasionado por la programación, constantemente
        busco mejorar mis habilidades y mantenerme al día con las últimas
        tendencias tecnológicas.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
