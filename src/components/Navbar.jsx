import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles/styles'
import { navLinks } from '../constants/'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toogle, setToogle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (!(scrollTop > 100)) {
        setScrolled(false)
        return
      } else {
        setScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 transition-[background,border] duration-300 ${
        scrolled
          ? 'backdrop-blur bg-primary/80 border-b border-gray-700'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-semibold cursor-pointer">
            Andru{' '}
            <span className="sm:inline-block hidden text-[#915eff]">
              | AndruTRADX
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-12">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active == link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toogle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToogle((prev) => !prev)}
          />

          <div
            className={`${
              toogle ? 'flex' : 'hidden'
            } p-6 rounded-xl border border-gray-700 bg-primary absolute top-24 right-0 mx-4 my-2 min-w-[140px] z-20`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active == link.title ? 'text-white' : 'text-secondary'
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToogle((prev) => !prev)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
