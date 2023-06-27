import React from 'react'
import { socials } from '../constants'

import { styles } from '../styles/styles'

const Footer = () => (
  <footer
    className={`${styles.paddingX} py-8 relative`}
  >
    <div className="footer-gradient hidden md:flex" />
    <div className="footer-gradient-md flex md:hidden" />
    <div className="2xl:max-w-[1280px] w-full' mx-auto  flex-col gap-8">

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">AndruTRADX</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            AndruTRADX © {new Date().getFullYear()} Fullstack developer. Todos los derechos reservados.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
