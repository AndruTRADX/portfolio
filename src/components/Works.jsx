/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles/styles'
import { github } from '../assets'
import { page } from '../assets'

import { projects } from '../constants'
import { fullstackProjects } from '../constants'
import { backendProjects } from '../constants'
import { frontendProjects } from '../constants'
import { projectsTypes } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import LazyImg from './utils/LazyImage'

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  soure_project_link,
}) => {
  return (
    <>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <LazyImg
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          {soure_project_link ? (
            <div className="absolute inset-0 right-[46px] flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(soure_project_link, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={page}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

const Works = () => {
  const [projectsState, setProjectsState] = useState(projects)
  const [projectType, setProjectType] = useState('mvp')

  useEffect(() => {
    const projectsHandler = () => {
      switch (projectType) {
        case 'mvp':
          setProjectsState(projects)
          break
        case 'fullstack':
          setProjectsState(fullstackProjects)
          break
        case 'backend':
          setProjectsState(backendProjects)
          break
        case 'frontend':
          setProjectsState(frontendProjects)
          break
        default:
          break
      }
    }

    projectsHandler()
  }, [projectType, projectsState])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mi trabajo</p>
        <h2 className={styles.sectionHeadText}>Proyectos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Estos proyectos son una muestra de mi dominio en las tecnologías que
          manejo. Son demostraciones de proyectos reales que utilizan mi stack
          tecnológico, cada uno con diferentes funcionalidades. Dependiendo de
          que tipos de proyectos quieres ver (Fullstack, backend, etc.)
          seleccionandolos con los botones que vez abajo, encontrarás el
          repositorio de código en Github de cada proyecto, así como, en algunos
          casos, un pequeño demo en vivo para que puedas explorarlo en acción.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projectsTypes.map((typeProject, index) => (
          <motion.button
            variants={fadeIn('right', 'spring', 0.125 * index, 0.75)}
            key={`type-project-${index}`}
            className={`p-[1px] rounded-xl cursor-pointer outline-none font-bold shadow-md shadow-tertiary ${
              projectType === typeProject
                ? 'bg-tertiary'
                : 'green-pink-gradient'
            }`}
          >
            <div
              className={`${
                projectType === typeProject
                  ? 'green-pink-gradient'
                  : 'bg-tertiary'
              } px-6 py-4 rounded-xl`}
              onClick={() => setProjectType(typeProject)}
            >
              {typeProject}
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projectsState.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works')
