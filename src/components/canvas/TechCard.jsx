/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import LazyImg from '../utils/LazyImage'

const TechCard = (props) => {
  return (
    <div className="w-[112px] h-auto">
      <motion.div
        variants={fadeIn('right', 'spring', 0.125 * props.index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-2 flex justify-evenly items-center flex-col"
        >
          <LazyImg
            src={props.icon}
            alt={props.name}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[16px] my-2 font-bold text-center">
            {props.name}
          </h3>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TechCard
