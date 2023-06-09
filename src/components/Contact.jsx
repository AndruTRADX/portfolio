import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles/styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import LazyImg from './utils/LazyImage'
import { Tilt } from 'react-tilt'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Andrés',
          from_email: form.email,
          to_email: 'andrudeluxe@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false)
          alert('¡Gracias! Voy a responderte lo más pronto posible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Ahh, algo salió mal :(.')
        },
      )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 0.75)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Pongamonos en contacto</p>
        <h2 className={styles.sectionHeadText}>Contacto</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tu nombre?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ryangosling@acme.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tu Mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Qué quieres decirme?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className="green-pink-gradient p-[1px] rounded-xl cursor-pointer w-fit outline-none font-bold shadow-md shadow-primary"
            >
              <div className="bg-tertiary px-6 py-4 rounded-xl">
                {loading ? 'Enviando...' : 'Enviar'}
              </div>
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 0.75)}
        className="flex flex-[1] justify-center items-center"
      >
        <Tilt className="w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] xl:block hidden p-[4px] green-pink-gradient rounded-full">
          <LazyImg
            className="w-full rounded-full top-0 shadow-xl shadow-violet-500"
            src="https://i.ibb.co/YhcwLTb/DALL-E-2023-04-18-16-46-27-A-cool-cat-with-a-sweater-writting-code-in-a-macbook.png"
            alt="Este soy yo, bien guapo"
          />
        </Tilt>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
