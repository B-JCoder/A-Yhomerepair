"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  const toggleNavbar = () => setOpenNavbar((prev) => !prev)

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-20 flex items-center bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
        <nav className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex min-w-max items-center">
            <Link href="/" className="flex items-center gap-x-3 text-xl font-bold text-white">
              <Image
                src="/images/logo.png"
                alt="A&Y’s Air and Repairs Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Navigation */}
        {/* Navigation */}
<div
  className={`
    fixed inset-0 flex flex-col items-center 
    bg-black/60 backdrop-blur-xl border-l border-[var(--gold,#D4AF37)]
    shadow-[0_0_25px_rgba(212,175,55,0.6)] 
    transition-all duration-300 ease-in-out
    lg:static lg:flex-row lg:bg-transparent lg:shadow-none lg:backdrop-blur-0 lg:justify-end lg:gap-10 lg:h-full lg:w-auto
    ${openNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 lg:translate-y-0 lg:opacity-100"}
  `}
>
  {/* Menu Links */}
  <ul className="flex flex-col gap-y-8 text-xl pt-24 lg:pt-0 lg:flex-row lg:gap-10 lg:text-base lg:items-center">
    <li>
      <Link href="/" className="hover:text-[var(--gold,#D4AF37)]" onClick={() => setOpenNavbar(false)}>
        Home
      </Link>
    </li>
    <li>
      <Link href="#services" className="hover:text-[var(--gold,#D4AF37)]" onClick={() => setOpenNavbar(false)}>
        Services
      </Link>
    </li>
    <li>
      <Link href="#about" className="hover:text-[var(--gold,#D4AF37)]" onClick={() => setOpenNavbar(false)}>
        About
      </Link>
    </li>
    <li>
      <Link href="#contact" className="hover:text-[var(--gold,#D4AF37)]" onClick={() => setOpenNavbar(false)}>
        Contact
      </Link>
    </li>
  </ul>

  {/* CTA Button */}
  <div className="mt-12 lg:mt-0">
    <Link
      href="#contact"
      className="flex items-center gap-x-2 px-5 py-2 rounded-lg font-medium text-black bg-[var(--gold,#D4AF37)] hover:bg-yellow-500 transition shadow-md"
      onClick={() => setOpenNavbar(false)}
    >
      Get a Quote
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  </div>
</div>

          {/* Mobile Hamburger */}
          <div className="flex items-center justify-end lg:hidden">
            <button
              onClick={toggleNavbar}
              className="relative w-10 h-10 flex flex-col justify-center items-center"
            >
              <span className="sr-only">Toggle navigation</span>
              <span
                className={`absolute block w-6 h-0.5 bg-[var(--gold,#D4AF37)] transition-transform duration-300 ease-in-out ${
                  openNavbar ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-[var(--gold,#D4AF37)] transition-opacity duration-300 ease-in-out ${
                  openNavbar ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block w-6 h-0.5 bg-[var(--gold,#D4AF37)] transition-transform duration-300 ease-in-out ${
                  openNavbar ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
