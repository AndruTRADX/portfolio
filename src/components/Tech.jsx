import React from 'react'
import { motion } from 'framer-motion'
import { TechCard } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant } from '../utils/motion'
import { styles } from '../styles/styles'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Habilidades técnicas profesionales
        </p>
        <h2 className={styles.sectionHeadText}>Tecnologías</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
        {technologies.map((technology, index) => (
          <TechCard
            icon={technology.icon}
            name={technology.name}
            index={index}
            key={technology.name}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
